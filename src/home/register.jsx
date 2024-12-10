import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added state for confirmPassword

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Save user credentials to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        password,
      })
    );

    alert("Registration successful! Please login.");
    window.location.href = "/login"; // Redirect to login page after successful registration
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Welcome to WorkSpace Finder
      </h2>
      <div
        className="card p-4 mx-auto"
        style={{
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="text-center mb-4" style={{ color: "#555", fontSize: "1rem" }}>
          Please fill in the details to create your account and start exploring workspaces.
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label
              style={{
                display: "block",
                width: "100%",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "5px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              style={{
                display: "block",
                width: "100%",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "5px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />
          </div>

          <div className="mb-3">
            <label
              style={{
                display: "block",
                width: "100%",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "5px",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              width: "50%",
              margin: "0 auto",
              display: "block",
              padding: "10px",
              fontWeight: "500",
              fontSize: "1.1rem",
              backgroundColor: "#28a745",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Register
          </button>
        </form>

        <p className="mt-3 text-center" style={{ fontSize: "1rem", color: "#555" }}>
          Already have an account? <a href="/login" style={{ color: "#4682b4" }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
