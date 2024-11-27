import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/images/logo1.png";
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";

function LoginPage() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [creds, setCreds] = useState({
        usernameorEmail: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = {
            usernameorEmail: creds.usernameorEmail,
            password: creds.password,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                const token = result.token;
                localStorage.setItem("token", token);
                navigate("/admin");
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message || errorData.error[0].msg);
            }
        } catch (error) {
            console.error("Error:", error);
            setLoginError("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <Preloader />
    }

    return (
        <>
            <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
                <div className="container-fluid my-5 my-lg-0">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
                                <div className="card-body p-5">
                                    <img src={logoImage} className="mb-4" width="145" alt="Logo" />
                                    <h4 className="fw-bold">Get Started Now</h4>
                                    <p className="mb-0">Enter your credentials to login your account</p>

                                    <AnimatePresence>
                                        {loginError && (
                                            <motion.div className="alert alert-border-danger alert-dismissible fade show mt-3"
                                                initial={{ x: "100%", opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: "-100%", opacity: 0 }}
                                                transition={{ duration: 0.5 }}>
                                                <div className="d-flex align-items-center">
                                                    <div className="font-35 text-danger">
                                                        <span className="material-icons-outlined fs-2">
                                                            report_gmailerrorred
                                                        </span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 text-danger">Error</h6>
                                                        <div>{loginError}</div>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn-close" onClick={() => setLoginError("")} aria-label="Close"></button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="form-body my-5">
                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="col-12">
                                                <label htmlFor="inputUsernameorEmail" className="form-label">
                                                    Email
                                                </label>
                                                <input type="text" className="form-control" name="usernameorEmail" onChange={onChange} id="inputUsernameorEmail" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputPassword" className="form-label">
                                                    Password
                                                </label>
                                                <div className="input-group" id="show_hide_password">
                                                    <input type={isPasswordVisible ? "text" : "password"} name="password" onChange={onChange} className="form-control border-end-0" id="inputPassword" required />
                                                    <a onClick={togglePasswordVisibility} className="input-group-text bg-transparent">
                                                        <i className={`bi ${isPasswordVisible ? "bi-eye-fill" : "bi-eye-slash-fill"}`}></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-end">
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-grd-primary">
                                                        Login
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;