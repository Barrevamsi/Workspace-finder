import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const workdata = data.slice(0, 8);

  return (
    <div className="container mt-4" id="work">
      <h2 className="text-center mb-4">Best Workspaces</h2>
      <div className="row">
        {workdata.map((workspace) => (
          <div className="col-md-3 mt-3" key={workspace.id}>
            <div className="card h-100">
              <img
                src={workspace.image}
                className="card-img-top"
                alt={workspace.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{workspace.name}</h5>
                <p className="card-text">
                  {workspace.location}
                  <br />
                  <strong>{workspace.pricePerDay}</strong>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Rating: {workspace.rating} ⭐
                  </small>
                </p>
                <Link to={`/workspace/${workspace.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
