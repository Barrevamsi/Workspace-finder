import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SearchContext } from "../context/context";

function Search() {
  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update the global search term
  };

  const handleSearchSubmit = () => {
    navigate("/search");
  };

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <h4>Search near your workplace</h4>
      <input
        type="text"
        placeholder="Enter the location ..."
        onChange={handleSearch}
        style={{
          width: "50%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSearchSubmit}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
