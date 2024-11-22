import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function ReservationsPage(){
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Failed to fetch users.");
                }
                const result = await response.json();
                setReservations(result);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchReservations();
    }, []);
    useEffect(() => {
        if (reservations.length > 0) {
            $('#reservationsTable').DataTable();
        }
    }, [reservations]);
    return(
        <>
            <Header/>
            <Sidebar/>
            <main className="main-wrapper">
                <div className="main-content">
                    <h6 className="mb-0 text-uppercase">Reservations</h6>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="reservationsTable" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Guest Name</th>
                                            <th>Room</th>
                                            <th>Check In Date</th>
                                            <th>Check Out Date</th>
                                            <th>Total Amount</th>
                                            <th>Reservation Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservations.map((reservation, index) => (
                                            <tr key={index}>
                                                <td>{reservation.guest.profile.name}</td>
                                                <td>{reservation.room.roomName}</td>
                                                <td>{new Date(reservation.checkIn).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>{new Date(reservation.checkOut).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>{reservation.totalAmount}</td>
                                                <td>{new Date(reservation.reservationDate).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>
                                                    <div className="btn-group">
                                                    </div>
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

export default ReservationsPage;