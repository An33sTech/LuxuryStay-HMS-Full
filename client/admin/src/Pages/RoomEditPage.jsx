import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useParams } from "react-router-dom";

function RoomEditPage() {
    const { roomId } = useParams();
    const [features, setFeatures] = useState([{ icon: null, text: "" }]);
    const [formData, setFormData] = useState({
        roomName: "",
        roomType: "",
        roomStatus: "",
        roomPrice: "",
        roomShortDesc: "",
        roomComments: "",
        persons: "",
        roomImage: null,
    });

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rooms/${roomId}`, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch room details.");
                }

                const result = await response.json();
                setFormData({
                    roomName: result.roomName || "",
                    roomType: result.type || "",
                    roomStatus: result.status || "",
                    roomPrice: result.price || "",
                    roomShortDesc: result.shortDesc || "",
                    roomComments: result.comments || "",
                    persons: result.persons || "",
                    roomImage: result.image || null,
                });
                setFeatures(result.features || [{ icon: null, text: "" }]);
                
            } catch (error) {
                alert(error.message);
            }
        };

        fetchRoomDetails();
        $('#fancy-file-upload').FancyFileUpload({
            params: {
                action: 'fileuploader',
            },
            maxfilesize: 1000000,
        });
    }, [roomId]);


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

    const handleImageChange = (e) => {
        setFormData({ ...formData, roomImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("roomName", formData.roomName);
        data.append("roomType", formData.roomType);
        data.append("roomStatus", formData.roomStatus);
        data.append("roomPrice", formData.roomPrice);
        data.append("roomShortDesc", formData.roomShortDesc);
        data.append("roomComments", formData.roomComments);
        data.append("persons", formData.persons);

        if (formData.roomImage) {
            data.append("roomImage", formData.roomImage);
        }
        for (const [index, feature] of features.entries()) {
            data.append(`features[${index}][icon]`, feature.icon);
            data.append(`features[${index}][text]`, feature.text);
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rooms/update/${roomId}`, {
                method: "PUT",
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
                                    <input type="text" className="form-control" id="roomName" value={formData.roomName} onChange={onChange} name="roomName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomType" className="form-label">Room Type</label>
                                    <select id="roomType" onChange={onChange} value={formData.roomType} name="roomType" className="form-select">
                                        <option value="">Choose...</option>
                                        <option value="suite">Suite</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomStatus" className="form-label">Room Status</label>
                                    <select id="roomStatus" onChange={onChange} value={formData.roomStatus} name="roomStatus" className="form-select">
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
                                    <input type="number" onChange={onChange} value={formData.roomPrice} className="form-control" id="roomPrice" name="roomPrice" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomShortDesc" className="form-label">Short Desc</label>
                                    <textarea className="form-control" name="roomShortDesc" id="roomShortDesc" onChange={onChange} value={formData.roomShortDesc}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="roomComments" className="form-label">Comments</label>
                                    <textarea className="form-control" name="roomComments" id="roomComments" onChange={onChange} value={formData.roomComments}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="persons" className="form-label">Guests</label>
                                    <select id="persons" onChange={onChange} value={formData.persons} name="persons" className="form-select">
                                        <option value="">Choose...</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="roomImage" className="form-label">Room Image</label>
                                    {formData.roomImage && (
                                        <p>
                                            Current Image:{" "}
                                            <a href={`${import.meta.env.VITE_BACKEND_URL}/uploads/${formData.roomImage}`} target="_blank" rel="noopener noreferrer">
                                                {formData.roomImage}
                                            </a>
                                        </p>
                                    )}
                                    <input id="fancy-file-upload" type="file" name="image" accept=".jpg, .png, image/jpeg, image/png" onChange={handleImageChange}></input>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="roomFeatures" className="form-label">Room Features</label>
                                    {features.map((feature, index) => (
                                        <div key={index} className="row mb-2 align-items-center">
                                            <div className="col-md-4">
                                                {feature.icon && (
                                                    <p>
                                                        Current File:{" "}
                                                        <a href={`${import.meta.env.VITE_BACKEND_URL}/uploads/${feature.icon}`} target="_blank" rel="noopener noreferrer">
                                                            {feature.icon}
                                                        </a>
                                                    </p>
                                                )}
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept=".jpg, .png, image/jpeg, image/png"
                                                    onChange={(e) => updateFeature(index, "icon", e.target.files[0])}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Feature Name"
                                                    value={feature.text}
                                                    onChange={(e) => updateFeature(index, "text", e.target.value)}
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

export default RoomEditPage;
