const express = require('express');
const Room = require('../models/Room');
const router = express.Router();
const { anyUpload } = require("../middleware/upload");

const generateRoomNumber = async () => {
    let roomNumber;
    let roomExists = true;

    while (roomExists) {
        roomNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

        const existingRoom = await Room.findOne({ roomNumber });
        if (!existingRoom) {
            roomExists = false;
        }
    }

    return roomNumber;
};

// CREATE a new room
router.post("/create", anyUpload, async (req, res) => {
    try {
        const { roomName, roomType, roomStatus, roomPrice } = req.body;

        const features = [];
        (req.files || []).forEach((file) => {
            const match = file.fieldname.match(/features\[(\d+)]\[\w+]/);
            if (match) {
                const index = parseInt(match[1], 10);
                while (features.length <= index) features.push({});
                features[index].icon = file.filename;
            }
        });

        Object.keys(req.body).forEach((key) => {
            const match = key.match(/features\[(\d+)]\[text]/);
            if (match) {
                const index = parseInt(match[1], 10);
                while (features.length <= index) features.push({});
                features[index].text = req.body[key];
            }
        });

        const roomNumber = await generateRoomNumber();

        const newRoom = new Room({
            roomNumber,
            roomName,
            type: roomType,
            status: roomStatus,
            price: roomPrice,
            features,
        });
        const savedRoom = await newRoom.save();
        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE a room by ID
router.put('/update/:id', async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE a room by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET available rooms
router.get('/available', async (req, res) => {
    try {
        const availableRooms = await Room.find({ status: 'available' });
        res.status(200).json(availableRooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET a single room by ID
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);    
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE room status
router.patch('/update/:id/status', async (req, res) => {
    const { status } = req.body;
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!updatedRoom) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
