const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Room = require('../models/Room');
const Reservation = require('../models/Reservation');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("guest").populate("room");
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to reserve a room
router.post('/reserve-room', async (req, res) => {
  const { guest, room, checkIn, checkOut, services, totalAmount } = req.body;
  try {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const roomSingle = await Room.findById(room);

    if (!roomSingle || roomSingle.status !== 'available') {
      return res.status(400).json({ message: 'Room is not available' });
    }

    const overlappingReservations = await Reservation.find({
      room: room,
      $or: [
        { checkIn: { $lt: checkOutDate }, checkOut: { $gt: checkInDate } }
      ]
    });

    if (overlappingReservations.length > 0) {
      return res.status(400).json({ message: 'Room is already reserved for the selected dates' });
    }

    const username = `${guest.firstName}${guest.lastName}`.toLowerCase();
    const password = Math.random().toString(36).substring(2, 8);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newGuest = new User({
      username: username,
      password: hashedPassword,
      role: 'guest',
      profile: {
        name: `${guest.firstName} ${guest.lastName}`,
        contact: {
          email: guest.email,
          phone: guest.phoneNumber
        },
        city: guest.city,
        country: guest.country
      },
    });

    await newGuest.save();

    const newReservation = new Reservation({
      guest: newGuest._id,
      room: room,
      reservationDate: new Date(),
      checkIn: checkInDate,
      checkOut: checkOutDate,
      services: services,
      totalAmount: totalAmount,
    });

    await newReservation.save();

    roomSingle.availability = {
      from: checkInDate,
      to: checkOutDate,
    };

    roomSingle.status = 'occupied';
    await roomSingle.save();

    res.status(201).json({
      message: 'Room reserved successfully',
      reservation: newReservation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error reserving the room' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) return res.status(404).json({ message: 'Reservation not found' });
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id).populate("guest").populate("room");
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the reservation' });
  }
});

module.exports = router;
