// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Retrieve user credentials from localStorage
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       alert("Login successful!");
//       setIsLoggedIn(true); // Update login state
//       navigate("/"); // Redirect to home
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           Login
//         </button>
//       </form>
//       <p className="mt-3 text-center">
//         Don't have an account? <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// }

// export default Login;
 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      onLogin(); // Update authentication state
      navigate('/'); // Redirect to home
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    // <div className="container mt-5">
    //   <h2 className="text-center">Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <div className="mb-3">
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary w-100">
    //       Login
    //     </button>
    //   </form>
    //   <p className="mt-3 text-center">
    //     Don't have an account? <a href="/register">Register</a>
    //   </p>
    // </div>

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
        Please enter your credentials to log in and find the best workspaces around you.
      </p>
  
      <form onSubmit={handleLogin}>
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
  
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{
            width: "50%",
            margin: "0 auto",
            display: "block",
            padding: "10px",
            fontWeight: "500",
            fontSize: "1.1rem",
            backgroundColor: "#4682b4",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
  
      <p className="mt-3 text-center" style={{ fontSize: "1rem", color: "#555" }}>
        Don't have an account? <a href="/register" style={{ color: "#4682b4" }}>Register</a>
      </p>
    </div>
  </div>
  

  );
}

export default Login;

