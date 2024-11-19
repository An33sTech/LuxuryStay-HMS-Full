import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function RoomsPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rooms`, {
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
        if (rooms.length > 0) {
            $('#roomsTable').DataTable();
        }
    }, [rooms]);
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <h6 className="mb-0 text-uppercase">Rooms Details</h6>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="roomsTable" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Room Number</th>
                                            <th>Room Name</th>
                                            <th>Type</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th>Last Cleaned</th>
                                            <th>Added At</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rooms.map((room, index) => (
                                            <tr key={index}>
                                                <td>{room.roomNumber}</td>
                                                <td>{room.roomName}</td>
                                                <td>{room.type}</td>
                                                <td>{room.status.charAt(0).toUpperCase() + room.status.slice(1)}</td>
                                                <td>{room.price}</td>
                                                <td>{new Date(room.lastCleaned).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>{new Date(room.createdAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>
                                                    
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RoomsPage;