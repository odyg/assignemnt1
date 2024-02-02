import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ locations }) => {
  return (
    <>
      {locations.map((location, index) => (
        <div key={index} className="weather-display">
          <p className="city">{location.city}</p>
          <p className="weather-info">{`${location.weather}, ${location.temperature}`}</p>
        </div>
      ))}
    </>
  );
};

export default WeatherDisplay;
