import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function UsersDetails() {
    const [users, setUsers] = useState([]);
    const handleDeactivateUser = async (userId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/update/${userId}/role-status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: 'inactive' }),
            });

            if (!response.ok) {
                throw new Error("Failed to deactivate user");
            }

            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === userId ? { ...user, status: 'inactive' } : user
                )
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleActivateUser = async (userId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/update/${userId}/role-status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: 'active' }),
            });

            if (!response.ok) {
                throw new Error("Failed to activate user");
            }

            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === userId ? { ...user, status: 'active' } : user
                )
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
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
                setUsers(result);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchUsers();
    }, []);
    useEffect(() => {
        if (users.length > 0) {
            $('#usersTable').DataTable();
        }
    }, [users]);
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <h6 className="mb-0 text-uppercase">Users Details</h6>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="usersTable" className="table table-striped table-bordered" style={{ width: "100%" }}>
                                    <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Registered On</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.profile.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.profile.contact.email}</td>
                                                <td>{user.profile.contact.phone}</td>
                                                <td>{user.role}</td>
                                                <td>{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</td>
                                                <td>{new Date(user.createdAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        {user.status === 'active' ? (
                                                            <>
                                                                <button type="button" className="btn btn-outline-danger d-flex deactivate-btn" onClick={() => handleDeactivateUser(user._id)}><i className="material-icons-outlined">toggle_off</i>
                                                                </button>
                                                                <Tooltip style={{ backgroundColor: "#f8f9fa", color: "#000" }} anchorSelect=".deactivate-btn" place="left">
                                                                    Deactivate User
                                                                </Tooltip>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button type="button" className="btn btn-outline-success d-flex activate-btn" onClick={() => handleActivateUser(user._id)}><i className="material-icons-outlined">toggle_on</i>
                                                                </button>
                                                                <Tooltip style={{ backgroundColor: "#f8f9fa", color: "#000" }} anchorSelect=".activate-btn" place="left">
                                                                    Activate User
                                                                </Tooltip>
                                                            </>
                                                        )}
                                                        <button type="button" className="btn btn-outline-primary d-flex"><i className="material-symbols-outlined">edit_square</i>
                                                        </button>
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

export default UsersDetails;