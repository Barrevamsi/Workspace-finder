
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       // Save the workspace ID for redirect after login
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }

//     // Proceed with booking for authenticated users
//     if (workspace) {
//       addBooking(workspace); // Add the workspace to bookings
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
//       <br />
//       <br />
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
//           <p>
//             <strong>Location:</strong> {workspace.location}
//           </p>
//           <p>
//             <strong>Price per Day:</strong> {workspace.pricePerDay}
//           </p>
//           <p>
//             <strong>Rating:</strong> {workspace.rating} ⭐
//           </p>
//           <p>
//             <strong>Description:</strong> {workspace.description}
//           </p>
//           <button onClick={handleBooking} className="btn btn-success mt-3">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   // State to manage the main image
//   const [mainImage, setMainImage] = useState(workspace?.image);

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       // Save the workspace ID for redirect after login
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }

//     // Proceed with booking for authenticated users
//     if (workspace) {
//       addBooking(workspace); // Add the workspace to bookings
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
//       <div className="row">
//         {/* Small images section */}
//         <div className="col-md-3">
//           <div className="d-flex flex-column gap-3">
//             <img
//               src={workspace.image1}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image1)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             <img
//               src={workspace.image2}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image2)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             <img
//               src={workspace.image3}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image3)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             {/* Adding the 4th image */}
//             <img
//               src={workspace.image}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//           </div>
//         </div>

       
//         <div className="col-md-9">
//           <img
//             src={mainImage}
//             alt={workspace.name}
//             className="img-fluid mb-4"
//             style={{
//               borderRadius: "10px",
//               maxHeight: "500px",
//               objectFit: "cover",
//             }}
//           />
//           <h2>{workspace.name}</h2>
//           <p>
//             <strong>Location:</strong> {workspace.location}
//           </p>
//           <p>
//             <strong>Price per Day:</strong> {workspace.pricePerDay}
//           </p>
//           <p>
//             <strong>Rating:</strong> {workspace.rating} ⭐
//           </p>
//           <p>
//             <strong>Description:</strong> {workspace.description}
//           </p>
//           <button onClick={handleBooking} className="btn btn-success mt-3">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;


// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import data from "../data.json";
// import { useBooking } from "../context/bookingContext";

// function WorkspaceDetails({ isAuthenticated }) {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addBooking } = useBooking();
//   const workspace = data.find((item) => item.id === parseInt(id));

//   // State to manage the main image
//   const [mainImage, setMainImage] = useState(workspace?.image);

//   const handleBooking = () => {
//     if (!isAuthenticated) {
//       // Save the workspace ID for redirect after login
//       localStorage.setItem("redirectPath", `/workspace/${id}`);
//       alert("Please log in to book this workspace.");
//       navigate("/login");
//       return;
//     }

//     // Proceed with booking for authenticated users
//     if (workspace) {
//       addBooking(workspace); // Add the workspace to bookings
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
//       <div className="row">
//         {/* Small images section */}
//         <div className="col-md-3">
//           <div className="d-flex flex-column gap-3">
//             <img
//               src={workspace.image1}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image1)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             <img
//               src={workspace.image2}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image2)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             <img
//               src={workspace.image3}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image3)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//             {/* Adding the 4th image */}
//             <img
//               src={workspace.image}
//               alt={workspace.name}
//               className="img-fluid small-img"
//               onMouseOver={() => setMainImage(workspace.image)}
//               style={{
//                 cursor: "pointer",
//                 maxWidth: "150px",  // Increased size of small images
//                 height: "auto",
//                 marginBottom: "10px",  // Adding some space between images
//                 borderRadius: "8px"
//               }}
//             />
//           </div>
//         </div>

       
//         <div className="col-md-9">
//           <img
//             src={mainImage}
//             alt={workspace.name}
//             className="img-fluid mb-4"
//             style={{
//               borderRadius: "10px",
//               maxHeight: "500px",
//               objectFit: "cover",
//             }}
//           />
//           <h2>{workspace.name}</h2>
//           <p>
//             <strong>Location:</strong> {workspace.location}
//           </p>
//           <p>
//             <strong>Price per Day:</strong> {workspace.pricePerDay}
//           </p>
//           <p>
//             <strong>Rating:</strong> {workspace.rating} ⭐
//           </p>
//           <p>
//             <strong>Description:</strong> {workspace.description}
//           </p>
//           <button onClick={handleBooking} className="btn btn-success mt-3">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WorkspaceDetails;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useBooking } from "../context/bookingContext";
import "./worksp.css"; // Import custom CSS for responsiveness

function WorkspaceDetails({ isAuthenticated }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBooking();
  const workspace = data.find((item) => item.id === parseInt(id));

  // State to manage the main image
  const [mainImage, setMainImage] = useState(workspace?.image);

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
    // <div className="container mt-4">
    //   <div className="row">
    //     {/* Small images section */}
    //     <div className="col-md-3 small-images-container">
    //       <div className="d-flex flex-column gap-2">
    //         <img
    //           src={workspace.image1}
    //           alt="workspace"
    //           className="img-fluid small-img"
    //           onMouseOver={() => setMainImage(workspace.image1)}
    //         />
    //         <img
    //           src={workspace.image2}
    //           alt="workspace"
    //           className="img-fluid small-img"
    //           onMouseOver={() => setMainImage(workspace.image2)}
    //         />
    //         <img
    //           src={workspace.image3}
    //           alt="workspace"
    //           className="img-fluid small-img"
    //           onMouseOver={() => setMainImage(workspace.image3)}
    //         />
    //         <img
    //           src={workspace.image}
    //           alt="workspace"
    //           className="img-fluid small-img"
    //           onMouseOver={() => setMainImage(workspace.image)}
    //         />
    //       </div>
    //     </div>

    //     {/* Main image and workspace details */}
    //     <div className="col-md-9">
    //       <img
    //         src={mainImage}
    //         alt={workspace.name}
    //         className="img-fluid main-img"
    //       />
    //       <h2>{workspace.name}</h2>
    //       <p>
    //         <strong>Location:</strong> {workspace.location}
    //       </p>
    //       <p>
    //         <strong>Price per Day:</strong> {workspace.pricePerDay}
    //       </p>
    //       <p>
    //         <strong>Rating:</strong> {workspace.rating} ⭐
    //       </p>
    //       <p>
    //         <strong>Description:</strong> {workspace.description}
    //       </p>
    //       <button onClick={handleBooking} className="btn btn-success mt-3">
    //         Book Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-4">
  <div className="row">
    {/* Small images section */}
    <div className="col-md-3">
      <div className="d-flex flex-md-column flex-row gap-2 small-images-wrapper">
        <img
          src={workspace.image1}
          alt={workspace.name}
          className="img-fluid small-img"
          onMouseOver={() => setMainImage(workspace.image1)}
        />
        <img
          src={workspace.image2}
          alt={workspace.name}
          className="img-fluid small-img"
          onMouseOver={() => setMainImage(workspace.image2)}
        />
        <img
          src={workspace.image3}
          alt={workspace.name}
          className="img-fluid small-img"
          onMouseOver={() => setMainImage(workspace.image3)}
        />
        <img
          src={workspace.image}
          alt={workspace.name}
          className="img-fluid small-img"
          onMouseOver={() => setMainImage(workspace.image)}
        />
      </div>
    </div>

    {/* Main image and workspace details */}
    <div className="col-md-9">
      <img
        src={mainImage}
        alt={workspace.name}
        className="img-fluid mb-4 main-img"
      />
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
