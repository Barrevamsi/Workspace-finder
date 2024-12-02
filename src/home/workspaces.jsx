import React from "react";
import data from "../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./workspace.css"

function HomePage() {
  const workdata = data.slice(0, 8);

  return (
    <div className="container mt-4" id="work" style={{ backgroundColor: "#f9f9f9", padding: "40px", borderRadius: "10px" }}>
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
        Best Workspaces
      </h2>
      <div className="row">
        {workdata.map((workspace) => (
          <div className="col-md-3 mt-3" key={workspace.id}>
            <div
              className="card h-100 card-hover"
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                border: "none",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src={workspace.image}
                className="card-img-top"
                alt={workspace.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>{workspace.name}</h5>
                <p className="card-text" style={{ fontSize: "14px", color: "#555" }}>
                  {workspace.location}
                  <br />
                  <strong style={{ color: "#007bff" }}>{workspace.pricePerDay}</strong>
                </p>
                <p className="card-text">
                  <small className="text-muted">Rating: {workspace.rating} ⭐</small>
                </p>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ width: "100%", borderRadius: "5px" }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
