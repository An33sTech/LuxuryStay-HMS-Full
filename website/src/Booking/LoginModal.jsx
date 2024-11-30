import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
export default function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        usernameorEmail: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [token, setToken] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { usernameorEmail, password } = formData;

        if (!usernameorEmail) {
            toast.error("Please provide either an email or username");
            return;
        }

        if (!password) {
            toast.error("Password is required");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, formData
            );

            const userToken = response.data.token;

            setToken(userToken);

            localStorage.setItem("authToken", userToken);

            toast.success(response.data.message || "Login successful!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error occurred during login.");
            console.log("Error occurred during Login:", error);
        }
    };
    return (
        <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"          
        >
            <div
                className="relative w-full max-w-lg px-4 h-auto rounded-lg shadow bg-[#121313] border"
                onClick={(e) => e.stopPropagation()}
            >

                {/* close button */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="space-y-2 px-6 pb-6">
                <h3 className="text-5xl font-medium text-white font-[Unbounded]">Login</h3> 
                   <h3 className="text-2xl font-medium text-[#CDB9FF]">Welcome Back!</h3>    
                    <p className="text-xs tracking-widest">Let’s get started on making your experience seamless and productive!</p>
                </div>
                {/* login form */}
                <form className="space-y-6 px-6 pb-6" onSubmit={handleLogin}>
                   

                    {/* Username or Email */}
                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                            type="text"
                            name="usernameorEmail"
                            id="usernameorEmail"
                            value={formData.usernameorEmail}
                            onChange={handleInputChange}
                            placeholder="Enter UserName or Email"
                            className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                        {/* password Field */}
                    <div className="mb-4 relative border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-cyan-500 bg-[#121313]">
                        <span className="absolute inset-y-0 left-0 px-3 flex items-center pl-3 bg-gray-500 rounded-l-md">
                            <FontAwesomeIcon icon={faLock} />
                        </span>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full pl-12 pr-12 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        />

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

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white focus:ring-0 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                    >
                        Login to your account
                    </button>

                </form>

            </div>
            <ToastContainer />
        </div>
    );
}