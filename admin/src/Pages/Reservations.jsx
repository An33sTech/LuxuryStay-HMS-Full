import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Preloader from "../Components/Preloader";

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const updateReservationStatus = async () => {
    if (!newStatus) {
      alert("Please select a status.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/update-status/${selectedReservation._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update reservation status.");
      }

      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation._id === selectedReservation._id
            ? { ...reservation, status: newStatus }
            : reservation
        )
      );

      setIsModalOpen(false);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch reservations.");
        }
        const result = await response.json();
        setReservations(result);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReservations();
  }, []);
  useEffect(() => {
    if (reservations.length > 0) {
      $('#reservationsTable').DataTable();
    }
  }, [reservations]);

  if (isLoading) {
    return <Preloader />
  }

  return (
    <>
      <Header />
      <Sidebar />
      {isModalOpen && (
        <div className="modal show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom-0 py-2">
                <h5 className="modal-title">Change Reservation Status</h5>
                <a className="primaery-menu-close" onClick={() => setIsModalOpen(false)}><i className="material-icons-outlined">close</i></a>
              </div>
              <div className="modal-body">
                <label htmlFor="statusDropdown" className="form-label">Select Status:</label>
                <select
                  id="statusDropdown"
                  className="form-select"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                >
                  <option value="" disabled>Select a status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="checked-in">Checked In</option>
                  <option value="checked-out">Checked Out</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="modal-footer border-top-0">
                <button type="button" className="btn btn-grd-danger" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-grd-info" onClick={updateReservationStatus}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="main-wrapper">
        <div className="main-content">
          <h6 className="mb-0 text-uppercase">Reservations Details</h6>
          <hr />
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table id="reservationsTable" className="table table-striped table-bordered" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Room Number</th>
                      <th>Room Name</th>
                      <th>Guest Name</th>
                      <th>Check-In</th>
                      <th>Check-Out</th>
                      <th>Status</th>
                      <th>Reserved On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation, index) => (
                      <tr key={index}>
                        <td>{reservation.room.roomNumber}</td>
                        <td>{reservation.room.roomName}</td>
                        <td>{reservation.guest.profile.name}</td>
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
                        <td>{reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}</td>
                        <td>{new Date(reservation.reservationDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}</td>
                        <td>

                          <button onClick={() => { setSelectedReservation(reservation); setNewStatus(reservation.status); setIsModalOpen(true); }} type="button" className="btn btn-outline-primary d-flex status-btn"><i className="material-symbols-outlined">transform</i>
                          </button>
                          <Tooltip style={{ backgroundColor: "#f8f9fa", color: "#000" }} anchorSelect=".status-btn" place="left">
                            Change Status
                          </Tooltip>
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