import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { rooms } from "../Components/roomsData";
import { Link } from "react-router-dom";
import RoomImage from '../assets/img1.jpg'

const SelectRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const checkInFormData = JSON.parse(localStorage.getItem("checkInFormData"));
        const { start, end } = checkInFormData || {};
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rooms/available?start=${start}&end=${end}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch rooms.");
        }
        const result = await response.json();
        setRooms(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRooms();
  }, []);
  useEffect(() => {

  }, [rooms]);
  return (
    <div className="m-5">
      <h1 className="text-4xl font-bold text-white py-5 font-[Unbounded]">Choose Your Room</h1>

      {rooms.map((room) => (
        <div key={room._id} className="mb-5 bg-[#313135] text-white rounded-lg p-5 shadow-2xl">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {/* Box 1: Room Image */}
            <div>
              <img src={RoomImage} alt={room.roomName} className="h-full w-full rounded-lg object-cover" />
            </div>

            {/* Box 2: Room Details */}
            <div>
              <h1 className="font-extrabold text-3xl">{room.roomName}</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil doloremque iusto itaque vero quos sapiente repudiandae.</p>

              <div className="py-5 space-y-2">
                {room.features.map((facility, index) => (
                  <div className="flex items-center space-x-4" key={index}>
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${facility.icon}`} alt={facility.text} className="text-cyan-500" />
                    <span>{facility.text}</span>
                  </div>
                ))}
              </div>

              {/* ratings */}
              {/* <div className="flex space-x-2">
                {room.ratingstars.map((icon, index) => (
                  <FontAwesomeIcon key={index} icon={icon} className="text-[#CDB9FF]" />
                ))}
                <span className="ml-2 text-[#CDB9FF]">Ratings</span>
              </div> */}

              {/* <p> {room.persons} </p> */}
            </div>

            {/* Box 3: Room Price and Booking */}
            <div className="md:text-right space-y-4">
              <h2 className="font-bold">Room Price</h2>
              <h1 className="text-3xl font-extrabold">
                {room.price} <span>PKR</span>
              </h1>
              {/* user */}
              {/* <div>
                {room.userIcons.map((icon, index) => (
                  <FontAwesomeIcon key={index} icon={icon} className="mx-1" />
                ))}
              </div> */}

              {/* <p>{room.persons}</p> */}
              <p className="text-[#CDB9FF]">Night Stay</p>
              <Link to={`/bookroom/${room._id}`}>
                <button className="p-4 rounded-lg bg-gradient-to-r btn">
                  Book Room
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectRoom;
