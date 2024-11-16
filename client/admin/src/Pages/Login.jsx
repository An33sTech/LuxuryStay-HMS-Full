import React, { useState } from "react";
import logoImage from "../assets/images/logo1.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [creds, setcreds] = useState({
        usernameorEmail: "",
        password: ""
    });

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onChange = (e) => {
        setcreds({ ...creds, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            usernameorEmail: e.target.inputUsernameorEmail.value,
            password: e.target.inputPassword.value
        };

        try {
            const response = await fetch("http://localhost:5000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                const token = result.token;
                localStorage.setItem('token', token);
                navigate("/admin");
            } else {
                const errorData = await response.json();
                alert("Login failed: " + errorData.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    return (
        <>
            <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
                <div className="container-fluid my-5 my-lg-0">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
                                <div className="card-body p-5">
                                    <img src={logoImage} className="mb-4" width="145" alt="" />
                                    <h4 className="fw-bold">Get Started Now</h4>
                                    <p className="mb-0">Enter your credentials to login your account</p>

                                    <div className="form-body my-5">
                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="col-12">
                                                <label htmlFor="inputUsernameorEmail" className="form-label">Email</label>
                                                <input type="text" className="form-control" name="usernameorEmail" onChange={onChange} id="inputUsernameorEmail" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                                <div className="input-group" id="show_hide_password">
                                                    <input type={isPasswordVisible ? "text" : "password"} name="password" onChange={onChange} className="form-control border-end-0" id="inputPassword"/>
                                                    <a
                                                        onClick={togglePasswordVisibility}
                                                        className="input-group-text bg-transparent"
                                                    >
                                                        <i
                                                            className={`bi ${isPasswordVisible
                                                                ? "bi-eye-fill"
                                                                : "bi-eye-slash-fill"
                                                                }`}
                                                        ></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-end">	<a href="auth-basic-forgot-password.html">Forgot Password ?</a>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-grd-primary">Login</button>
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
