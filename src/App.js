// App.js
import React, { useState } from "react";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import locations from "./locations.json";

function App() {
  const [search, setSearch] = useState("");
  // State to hold the last valid filtered locations
  const [lastValidLocations, setLastValidLocations] = useState([]);
  const [error, setError] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      // Clear the error message when the search is cleared
      setError("");
      // Clear the last valid search if the search box is cleared
      setLastValidLocations([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setError("Please enter a location to search.");
      return;
    }
    const matchedLocations = locations.filter((location) =>
      location.city.toLowerCase().includes(search.toLowerCase())
    );

    if (matchedLocations.length > 0) {
      setLastValidLocations(matchedLocations);
      setError("");
    } else {
      setError("Unable to locate info for that location");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a location"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {error && <div className="error-message">{error}</div>}
      <br />
      {lastValidLocations.length > 0 && (
        <WeatherDisplay locations={lastValidLocations} />
      )}
    </div>
  );
}

export default App;
