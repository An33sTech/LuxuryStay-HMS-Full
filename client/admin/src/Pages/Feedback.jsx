import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function FeedbackDetails() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/feedback`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Failed to fetch feedbacks.");
                }
                const result = await response.json();
                setFeedbacks(result);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchFeedbacks();
    }, []);
    useEffect(() => {
        if (feedbacks.length > 0) {
            $('#feedbacksTable').DataTable();
        }
    }, [feedbacks]);
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <h6 className="mb-0 text-uppercase">Feedbacks</h6>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="feedbacksTable" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Reservation ID</th>
                                            <th>Rating</th>
                                            <th>Comments</th>
                                            <th>Submitted On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feedbacks.map((feedback, index) => (
                                            <tr key={index}>
                                                <td>{feedback.guest.profile.name}</td>
                                                <td>{feedback.reservation}</td>
                                                <td>{feedback.rating}</td>
                                                <td>{feedback.comments}</td>
                                                <td>{new Date(feedback.submittedAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
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

export default FeedbackDetails;