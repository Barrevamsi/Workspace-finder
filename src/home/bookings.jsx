import React from "react";
import { useBooking } from "../context/bookingContext";

function MyBookings() {
  const { bookings } = useBooking();

  return (
    <div className="container mt-4">
      <br /><br />
      <h2 className="text-center mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet!</p>
      ) : (
        <div className="row">
          {bookings.map((workspace, index) => (
            <div className="col-md-3 mt-3" key={index}>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
