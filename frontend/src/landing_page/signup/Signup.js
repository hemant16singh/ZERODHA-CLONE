// import React from 'react';
// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;



import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Signup data:", formData);
      alert("Account created successfully! (Demo)");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="display-6 fw-bold" style={{ color: "#424242" }}>
              Sign up for free
            </h1>
            <p className="text-muted mt-3">
              Or <Link to="/login" style={{ color: "#387ed1", textDecoration: "none" }}>login to your existing account</Link>
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            
            {/* Phone Number */}
            <div className="mb-3">
              <label className="form-label">
                Mobile Number *
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">
                Password *
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label">
                Confirm Password *
              </label>
              <input
                type="password"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            {/* Terms & Conditions */}
            <div className="mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  id="termsCheck"
                />
                <label className="form-check-label text-muted" htmlFor="termsCheck" style={{ fontSize: "0.85rem" }}>
                  I agree to the <Link to="/terms" style={{ color: "#387ed1" }}>Terms & Conditions</Link> and 
                  <Link to="/privacy" style={{ color: "#387ed1" }}> Privacy Policy</Link>
                </label>
              </div>
              {errors.agreeTerms && <div className="text-danger mt-1 small">{errors.agreeTerms}</div>}
            </div>

            {/* Submit Button - NOW USING CSS CLASS */}
            <button
              type="submit"
              className="btn-primary-custom w-100"
              style={{ fontSize: "1rem" }}
            >
              Create Account
            </button>

            {/* Alternative Signup */}
            <div className="text-center mt-4">
              <p className="text-muted small">or sign up with</p>
              <div className="d-flex gap-2 justify-content-center">
                <button type="button" className="btn btn-outline-secondary" style={{ flex: 1 }}>
                  <i className="bi bi-google"></i> Google
                </button>
                <button type="button" className="btn btn-outline-secondary" style={{ flex: 1 }}>
                  <i className="bi bi-apple"></i> Apple
                </button>
              </div>
            </div>
          </form>

          {/* Demo Account Notice */}
          <div className="alert alert-light text-center mt-4" style={{ fontSize: "0.85rem", backgroundColor: "#f5f5f5" }}>
            <i className="bi bi-shield-check"></i> Demo mode - No actual account will be created
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;