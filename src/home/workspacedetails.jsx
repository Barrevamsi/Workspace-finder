// import React from "react";
// import { useParams } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails() {
//   const { id } = useParams();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const handleBooking = () => {
//     console.log("Workspace being booked:", workspace);
//     if (workspace) {
//       addBooking(workspace); // Correctly pass the workspace object
//       alert("Booking successful!");
//     } else {
//       alert("Error: Workspace not found!");
//     }
//   };
  

//   if (!workspace) {
//     return <h2 className="text-center mt-4">Workspace not found!</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <br /><br />
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={workspace.image}
//             alt={workspace.name}
//             className="img-fluid"
//             style={{ borderRadius: "10px" }}
//           />
//         </div>
//         <div className="col-md-6">
//           <h2>{workspace.name}</h2>
//           <p><strong>Location:</strong> {workspace.location}</p>
//           <p><strong>Price per Day:</strong> {workspace.pricePerDay}</p>
//           <p><strong>Rating:</strong> {workspace.rating} ⭐</p>
//           <p><strong>Description:</strong> {workspace.description}</p>
//           <button onClick={handleBooking} className="btn btn-success mt-3">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;


import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useBooking } from "../context/bookingContext";

function WorkspaceDetails({ isAuthenticated }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBooking();
  const workspace = data.find((item) => item.id === parseInt(id));

  const handleBooking = () => {
    if (!isAuthenticated) {
      // Save the workspace ID for redirect after login
      localStorage.setItem("redirectPath", `/workspace/${id}`);
      alert("Please log in to book this workspace.");
      navigate("/login");
      return;
    }

    // Proceed with booking for authenticated users
    if (workspace) {
      addBooking(workspace); // Add the workspace to bookings
      alert("Booking successful!");
    } else {
      alert("Error: Workspace not found!");
    }
  };

  if (!workspace) {
    return <h2 className="text-center mt-4">Workspace not found!</h2>;
  }

  return (
    <div className="container mt-4">
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <img
            src={workspace.image}
            alt={workspace.name}
            className="img-fluid"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{workspace.name}</h2>
          <p>
            <strong>Location:</strong> {workspace.location}
          </p>
          <p>
            <strong>Price per Day:</strong> {workspace.pricePerDay}
          </p>
          <p>
            <strong>Rating:</strong> {workspace.rating} ⭐
          </p>
          <p>
            <strong>Description:</strong> {workspace.description}
          </p>
          <button onClick={handleBooking} className="btn btn-success mt-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDetails;
