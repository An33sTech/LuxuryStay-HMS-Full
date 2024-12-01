import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/images/logo1.png";
import Preloader from "../Components/Preloader";

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [creds, setcreds] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    image: null,
  });
  
  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setcreds({ ...creds, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      username: creds.username,
      password: creds.password,
      role: creds.role,
      profile: {
        name: creds.name,
        contact: {
          email: creds.email,
          phone: creds.phone
        },
        image: creds.image,
      },
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setRegistrationSuccess("The account has been created, you can login now");
      } else {
        const errorData = await response.json();
        setRegistrationError(errorData.message || errorData.error[0].msg);
      }
    } catch (error) {
      console.error("Error:", error);
      setRegistrationError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <Preloader />
  }
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
              <div className="card-body p-5">
                <img src={logoImage} className="mb-4" width="145" alt="admin-logo" />
                <h4 className="fw-bold">Get Started Now</h4>
                <p className="mb-0">
                  Enter your credentials to create your account
                </p>
                <AnimatePresence>
                  {registrationError && (
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
                          <div>{registrationError}</div>
                        </div>
                      </div>
                      <button type="button" className="btn-close" onClick={() => setRegistrationError("")} aria-label="Close"></button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {registrationSuccess && (
                    <motion.div className="alert alert-border-success alert-dismissible fade show mt-3"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}>
                      <div className="d-flex align-items-center">
                        <div className="font-35 text-success">
                          <span className="material-icons-outlined fs-2">
                            check_circle
                          </span>
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 text-success">Success</h6>
                          <div>{registrationSuccess}</div>
                        </div>
                      </div>
                      <button type="button" className="btn-close" onClick={() => setRegistrationSuccess("")} aria-label="Close"></button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="form-body my-4">
                  <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="col-12">
                      <label htmlFor="inputName" className="form-label">
                        Full Name
                      </label>
                      <input type="text" className="form-control" id="inputName" placeholder="John Doe" name="name" onChange={onChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputUsername" className="form-label">
                        Username
                      </label>
                      <input type="text" className="form-control" id="inputUsername" placeholder="Jhon" name="username" onChange={onChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        Email Address
                      </label>
                      <input type="email" className="form-control" id="inputEmailAddress" placeholder="example@user.com" name="email" onChange={onChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputChoosePassword" className="form-label">
                        Password
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input type={isPasswordVisible ? "text" : "password"} className="form-control border-end-0" id="inputChoosePassword" placeholder="Enter Password" name="password" onChange={onChange} required />
                        <a onClick={togglePasswordVisibility} className="input-group-text bg-transparent">
                          <i className={`bi ${isPasswordVisible ? "bi-eye-fill" : "bi-eye-slash-fill"}`}></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone
                      </label>
                      <input type="tel" className="form-control" id="inputPhone" placeholder="+92 123 456789" name="phone" onChange={onChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <select onChange={onChange} className="form-select" id="role" aria-label="Default select example" name="role" required>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="receptionist">Receptionist</option>
                        <option value="housekeeping">House Keeping</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="image" className="form-label">Upload Your Image</label>
                      <input className="form-control" id="image" type="file" name="image" accept=".jpg, .png, image/jpeg, image/png" onChange={handleImageChange} />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-grd-danger">
                          Register
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
    </>
  );
}
export default RegisterPage;