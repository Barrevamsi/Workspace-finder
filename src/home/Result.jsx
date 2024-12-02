import { useContext } from "react";
// import { SearchContext } from "../context/SearchContext";
import { SearchContext } from "../context/context";
import data from "../data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./search";

function ResultsPage() {
  const { searchTerm } = useContext(SearchContext);

  // Filter data based on search term
  const filteredData = data.filter((workspace) =>
    workspace.location.toLowerCase().includes(searchTerm)
  );

  return (
    <>
    <Search/>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Search Results</h2>
      {filteredData.length > 0 ? (
        <div className="row">
          {filteredData.map((workspace) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No results found for "{searchTerm}".</p>
      )}
    </div>
    </> );
}

export default ResultsPage;
