
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavScrollExample from "./home/nav";
import Home from "./home/home";
import ResultsPage from "./home/Result";
import WorkspaceDetails from "./home/workspacedetails";
import MyBookings from "./home/bookings";
import About from "./home/about";
import Contact from "./home/contact";
import Login from "./home/login";
import Register from "./home/register";
import { SearchProvider } from "./context/context";
import { BookingProvider } from "./context/bookingContext";
import ProtectedRoute from "./home/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BookingProvider>
      <SearchProvider>
        <Router>
          <div
            style={{
              backgroundColor: "#f0f8ff",
              minHeight: "100vh",
              paddingTop: "60px",
            }}
          >
            {/* Always Show Navbar */}
            <NavScrollExample
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />

            {/* Routes */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<ResultsPage />} />
              <Route
                path="/workspace/:id"
                element={<WorkspaceDetails isAuthenticated={isAuthenticated} />}
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route
                path="/my-bookings"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <MyBookings />
                  </ProtectedRoute>
                }
              />
            </Routes>

            {/* Always Show About and Contact */}
            <About isAuthenticated={isAuthenticated} />
            <Contact isAuthenticated={isAuthenticated} />
          </div>
        </Router>
      </SearchProvider>
    </BookingProvider>
  );
}

export default App;
