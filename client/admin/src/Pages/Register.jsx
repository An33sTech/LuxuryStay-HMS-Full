import React, { useEffect, useState } from "react";
import logoImage from "../assets/images/logo1.png";

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
    const formData = new FormData();
    formData.append("username", creds.username);
    formData.append("password", creds.password);
    formData.append("role", creds.role);
    formData.append("profile[name]", creds.name);
    formData.append("profile[contact][email]", creds.email);
    formData.append("profile[contact][phone]", creds.phone);

    if (creds.image) {
      formData.append("image", creds.image);
    }

    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const errorData = await response.json();
        alert("Registration failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  useEffect(() => {
    $('#fancy-file-upload').FancyFileUpload({
      params: {
        action: 'fileuploader',
      },
      maxfilesize: 1000000,
    });
  }, []);
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
            <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
              <div className="card-body p-5">
                <img
                  src={logoImage}
                  className="mb-4"
                  width="145"
                  alt="admin-logo"
                ></img>
                <h4 className="fw-bold">Get Started Now</h4>
                <p className="mb-0">
                  Enter your credentials to create your account
                </p>

                <div className="form-body my-4">
                  <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="col-12">
                      <label htmlFor="inputName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="John Doe"
                        name="name"
                        onChange={onChange}
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputUsername" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        placeholder="Jhon"
                        name="username"
                        onChange={onChange}
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmailAddress"
                        placeholder="example@user.com"
                        name="email"
                        onChange={onChange}
                      ></input>
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="inputChoosePassword"
                        className="form-label"
                      >
                        Password
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="form-control border-end-0"
                          id="inputChoosePassword"
                          placeholder="Enter Password"
                          name="password"
                          onChange={onChange}
                        ></input>
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
                    <div className="col-12">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        placeholder="+92 123 456789"
                        name="phone"
                        onChange={onChange}
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label htmlFor="role" className="form-label">
                        Role
                      </label>
                      <select
                        onChange={onChange}
                        className="form-select"
                        id="role"
                        aria-label="Default select example"
                        name="role"
                      >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="receptionist">Receptionist</option>
                        <option value="housekeeping">House Keeping</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="image" className="form-label">Upload Your Image</label>
                      <input id="fancy-file-upload" type="file" name="image" accept=".jpg, .png, image/jpeg, image/png" onChange={handleImageChange}></input>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-grd-danger">
                          Register
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-start">
                        <p className="mb-0">
                          Already have an account?{" "}
                          <a href="auth-basic-login.html">Sign in here</a>
                        </p>
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