import { useContext } from "react";
import { SearchContext } from "../context/context";
import data from "../data.json";
// import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./search";
import { Link } from "react-router-dom";

function ResultsPage() {
  const { searchTerm } = useContext(SearchContext);

  
  const filteredData = data.filter((workspace) =>
    workspace.location.toLowerCase().includes(searchTerm)
  );

  return (
    <>
    <br />
    <br />
    <Search/>
    <div className="container mt-4">
  <h2
    className="text-center mb-4"
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#3a539b", // Softer blue tone for title
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    }}
  >
    Search Results
  </h2>
  {filteredData.length > 0 ? (
    <div className="row">
      {filteredData.map((workspace) => (
        <div className="col-md-3 col-sm-6 mt-3" key={workspace.id}>
          <div
            className="card h-100"
            style={{
              border: "none",
              borderRadius: "15px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)", // Softer shadow
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.15)";
            }}
          >
            {/* Image Section */}
            <img
              src={workspace.image}
              className="card-img-top"
              alt={workspace.name}
              style={{
                height: "200px",
                objectFit: "cover",
                filter: "brightness(90%)", // Slightly lighter image
                borderBottom: "4px solid #5d9cec", // Lighter border
              }}
            />

            {/* Card Content */}
            <div
              className="card-body"
              style={{
                background: "linear-gradient(135deg, #f5f7fa, #cfd9df)", // Light gradient
                color: "#4a4a4a", // Softer dark text
                padding: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <h5
                className="card-title"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {workspace.name}
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "1rem",
                  marginBottom: "10px",
                  color: "#6c7a89", // Softer gray
                }}
              >
                <i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>
                {workspace.location}
              </p>
              <p
                className="card-text"
                style={{
                  fontSize: "1rem",
                  color: "#5d9cec", // Light blue for price
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                ₹{workspace.pricePerDay} / day
              </p>
              <p
                className="card-text"
                style={{
                  fontSize: "0.9rem",
                  opacity: "0.9",
                  marginBottom: "20px",
                  color: "#f39c12", // Gold for rating stars
                }}
              >
                <i
                  className="fas fa-star"
                  style={{
                    color: "#f39c12",
                    marginRight: "5px",
                  }}
                ></i>
                Rating: {workspace.rating} ⭐
              </p>

              {/* View Details Button */}
              <div
                className="d-flex justify-content-center"
                style={{
                  marginTop: "auto", // Ensures button is at the bottom of the card
                }}
              >
                <Link
                  to={`/workspace/${workspace.id}`}
                  className="btn"
                  style={{
                    width: "100%", // Makes button fill the card's width equally
                    maxWidth: "200px", // Limit the max width for better consistency
                    padding: "10px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    background: "#1c3a63",
                    color: "#fff",
                    borderRadius: "20px",
                    textDecoration: "none",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                 
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p
      className="text-center"
      style={{
        color: "#7f8c8d",
        fontSize: "1.2rem",
        fontStyle: "italic",
      }}
    >
      No results found for "{searchTerm}".
    </p>
  )}
</div>

    </> );
}

export default ResultsPage;
