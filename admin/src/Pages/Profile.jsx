import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Preloader from "../Components/Preloader";
import { useParams } from "react-router-dom";

function Profile() {
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        role: "",
        image: null,
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchUserInfo = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`, {
                    method: "GET",
                });

                if (response.ok) {
                    const result = await response.json();
                    setFormData({
                        name: result.profile.name || "",
                        username: result.username || "",
                        email: result.profile.contact.email || "",
                        phone: result.profile.contact.phone || "",
                        role: result.role || "",
                        image: result.profile.image || null,
                    });
                } else {
                    console.error("Failed to fetch user info");
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, [userId]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData();
        data.append("profile[name]", formData.name);
        data.append("profile[contact][phone]", formData.phone);

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/update/${userId}`, {
                method: "PUT",
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setSuccess("The account has been updated");
            } else {
                const errorData = await response.json();
                setError(errorData.message || (errorData.error && errorData.error[0]?.msg) || "Unknown error occurred");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <Preloader />
    }
    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            <div className="card rounded-4 border-top border-4 border-primary border-gradient-1">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <div className="">
                                            <h5 className="mb-0 fw-bold">Edit Profile</h5>
                                        </div>
                                    </div>
                                    <form className="row g-4" onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="col-md-12">
                                            <label htmlFor="inputName" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="inputName" name="name" value={formData.name} onChange={onChange} required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="inputUsername" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="inputUsername" name="username" value={formData.username} readOnly />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                                            <input type="email" className="form-control" id="inputEmailAddress" name="email" value={formData.email} readOnly />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="inputPhone" className="form-label">Phone</label>
                                            <input type="tel" className="form-control" id="inputPhone" value={formData.phone} name="phone" onChange={onChange} required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="role" className="form-label">Role</label>
                                            <select onChange={onChange} disabled className="form-select" id="role" aria-label="Default select example" value={formData.role} name="role" required>
                                                <option value="">Select Role</option>
                                                <option value="admin">Admin</option>
                                                <option value="manager">Manager</option>
                                                <option value="receptionist">Receptionist</option>
                                                <option value="housekeeping">House Keeping</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="image" className="form-label">Change Your Profile Image</label>
                                            <input className="form-control" id="image" type="file" name="image" accept=".jpg, .png, image/jpeg, image/png" onChange={handleImageChange} />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-md-flex d-grid align-items-center gap-3">
                                                <button type="submit" className="btn btn-grd-primary px-4">Update Profile</button>                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div className="card rounded-4">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between mb-3">
                                        <div className="">
                                            <h5 className="mb-0 fw-bold">About</h5>
                                        </div>
                                    </div>
                                    <div className="full-info">
                                        <div className="info-list d-flex flex-column gap-3">
                                            <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">account_circle</span><p className="mb-0">Full Name: {formData.name}</p></div>
                                            <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">code</span><p className="mb-0">Role: {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}</p></div>
                                            <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">send</span><p className="mb-0">Email: {formData.email}</p></div>
                                            <div className="info-list-item d-flex align-items-center gap-3"><span className="material-icons-outlined">call</span><p className="mb-0">Phone: {formData.phone}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;