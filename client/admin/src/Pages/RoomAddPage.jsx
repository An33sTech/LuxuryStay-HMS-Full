import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function RoomAddPage() {
    const [features, setFeatures] = useState([{ icon: null, text: "" }]);
    const [formData, setFormData] = useState({
        roomName: "",
        roomType: "",
        roomStatus: "",
        roomPrice: "",
    });

    const addFeature = () => {
        setFeatures([...features, { icon: null, text: "" }]);
    };

    const updateFeature = (index, field, value) => {
        const updatedFeatures = features.map((feature, i) =>
            i === index ? { ...feature, [field]: value } : feature
        );
        setFeatures(updatedFeatures);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("roomName", formData.roomName);
        data.append("roomType", formData.roomType);
        data.append("roomStatus", formData.roomStatus);
        data.append("roomPrice", formData.roomPrice);

        features.forEach((feature, index) => {
            if (feature.icon && feature.text) {
                data.append(`features[${index}][text]`, feature.text);
                data.append(`features[${index}][icon]`, feature.icon);
            } else {
                alert(`Please fill both text and icon for feature ${index + 1}`);
                return;
            }
        });

        try {
            const response = await fetch("http://localhost:5000/rooms/create", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            console.log(result);
            alert("Room Added successfully!");
        } catch (error) {
            alert("Error adding room: " + error.message);
        }
    };

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main-wrapper">
                <div className="main-content">
                    <h6 className="mb-0 text-uppercase">Add New Room</h6>
                    <hr />
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="col-md-6">
                                    <label htmlFor="roomName" className="form-label">Room Name</label>
                                    <input type="text" className="form-control" id="roomName" onChange={onChange} name="roomName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomType" className="form-label">Room Type</label>
                                    <select id="roomType" onChange={onChange} name="roomType" className="form-select">
                                        <option value="">Choose...</option>
                                        <option value="suite">Suite</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomStatus" className="form-label">Room Status</label>
                                    <select id="roomStatus" onChange={onChange} name="roomStatus" className="form-select">
                                        <option value="">Choose...</option>
                                        <option value="available">Available</option>
                                        <option value="occupied">Occupied</option>
                                        <option value="cleaning">Cleaning</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="unavailable">Unavailable</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomPrice" className="form-label">Room Price</label>
                                    <input type="number" onChange={onChange} className="form-control" id="roomPrice" name="roomPrice" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="roomFeatures" className="form-label">Room Features</label>
                                    {features.map((feature, index) => (
                                        <div key={index} className="row mb-2 align-items-center">
                                            <div className="col-md-4">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept=".jpg, .png, image/jpeg, image/png"
                                                    onChange={(e) =>
                                                        updateFeature(index, "icon", e.target.files[0])
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Feature Name"
                                                    value={feature.text}
                                                    onChange={(e) =>
                                                        updateFeature(index, "text", e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div className="col-md-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => removeFeature(index)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={addFeature}
                                    >
                                        Add Feature
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-md-flex d-grid align-items-center gap-3">
                                        <button type="submit" className="btn btn-grd-primary px-4">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RoomAddPage;
