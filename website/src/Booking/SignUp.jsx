import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEnvelope, faEye, faEyeSlash, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignUpModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        repeatedPassword: "",
        role: "user",
    });

    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [confirmshowPassword, setConfirmShowPassword] = useState(false); // State for password visibility

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle signup form submission
    const handleSignup = async (e) => {
        e.preventDefault();

        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }

        if (formData.password !== formData.repeatedPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const dataToSend = {
                username: formData.username,
                password: formData.password,
                role: formData.role,
                profile: {
                    name: formData.username,
                    contact: {
                        email: formData.email,
                        phone: formData.phone,
                    },
                },
            };

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/users/register`,
                JSON.stringify(dataToSend),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success(response.data.message || "Signup successful!");
            setFormData({
                username: "",
                email: "",
                phone: "",
                password: "",
                repeatedPassword: "",
                role: "user",
            });
        } catch (error) {
            toast.error(error.response?.data?.message || "Error occurred during signup.");
            console.log("Error occurred during signup:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
            <div
                className="relative w-full max-w-lg px-4 h-auto rounded-lg shadow-lg border bg-[#121313]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base px-3 py-2 ml-auto inline-flex items-center"
                    >
                       <FontAwesomeIcon icon={faClose}/>
                    </button>
                </div>

                <form className="space-y-4 text-white px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={handleSignup}>
                    <h3 className="text-4xl font-medium text-white font-[Unbounded]">Sign Up</h3>
                    <h3 className="text-2xl font-medium text-[#CDB9FF]">Join Us Today!</h3>
                    <p className="text-xs tracking-widest">Create your account to unlock exclusive features, connect with our community, and start your journey with us. It's quick, easy, and free!</p>

                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        {/* user Icon */}
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    </div>

                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        {/* email Icon */}
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    </div>

                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        {/* phone Icon */}
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full pl-12 pr-2 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    </div>

                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        {/* Lock Icon */}
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faLock} />
                        </span>

                        {/* Input Field */}
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />

                        {/* Show/Hide Password Icon */}
                        <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? (
                                <FontAwesomeIcon icon={faEye} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} />
                            )}
                        </span>
                    </div>


                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                            type={confirmshowPassword ? "text" : "password"}
                            name="repeatedPassword"
                            value={formData.repeatedPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                        <span
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                            onClick={() => setConfirmShowPassword((prev) => !prev)}
                        >
                            {confirmshowPassword ?
                                <FontAwesomeIcon icon={faEye} />
                                :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="btn outline-none w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
