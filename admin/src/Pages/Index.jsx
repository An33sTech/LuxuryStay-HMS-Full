import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import FeedbackChart from "../Components/FeedbackChart";
import OccupancyChart from "../Components/OccupancyChart";
import RevenueChart from "../Components/RevenueChart";
import ForecastChart from "../Components/ForecastChart";
import PricingChart from "../Components/PricingChart";
import { useEffect, useState } from "react";

function IndexPage() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState("");
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
                if (result.length > 0) {
                    setSelectedRoomId(result[0]._id);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchRooms();
    }, []);
    const handleRoomSelect = (roomId) => {
        setSelectedRoomId(roomId);
    };
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card rounded-4">
                                <div className="card-header py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0">Feedback Distribution</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <FeedbackChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <div className="card rounded-4">
                                <div className="card-header py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0">Forecasted Data</h5>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                                                <span className="material-icons-outlined fs-5">more_vert</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                {rooms.map((room) => (
                                                    <li key={room._id}><a onClick={() => handleRoomSelect(room._id)} className="dropdown-item">{room.roomName}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ForecastChart roomId={selectedRoomId} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-12">
                            <div className="card rounded-4">
                                <div className="card-header py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0">Pricing Trend</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <PricingChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-12">
                            <OccupancyChart />
                        </div>
                        <div className="col-12 col-xl-12">
                            <div className="card rounded-4">
                                <div className="card-header py-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="mb-0">Revenue</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <RevenueChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default IndexPage;