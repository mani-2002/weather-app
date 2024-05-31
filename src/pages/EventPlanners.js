import React, { useState } from "react";
import eventPlanners from "../images/event_planners.jpg";

const EventPlanners = () => {
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      const kelvinTemp = data.main.temp;
      const celsiusTemp = kelvinToCelsius(kelvinTemp);
      const weatherCondition = data.weather[0].main;
      setTemperature(celsiusTemp);
      setWeather(weatherCondition);
      setEventSuggestion(celsiusTemp, weatherCondition);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const setEventSuggestion = (temperature, weatherCondition) => {
    if (temperature < 5 || temperature > 30 || weatherCondition === "Rain") {
      setSuggestion(
        "It is not advisable to plan an event due to extreme weather conditions."
      );
    } else {
      setSuggestion("It is a good time to plan an event.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    fetchWeather(city);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${eventPlanners})`,
        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <div style={{ padding: "20px" }}>
        <center>
          <div
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              backgroundColor: "white",
            }}
          >
            Check if it's a Good Time to Plan any Event in Your City, Use Search
            Box Below...
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="city"
              placeholder="Enter City Name..."
              style={{ width: "300px", padding: "10px", background: "white" }}
              className="form-control"
            />
            <br />
            <input
              type="submit"
              value="Check Weather"
              style={{ fontSize: "18px", marginTop: "10px" }}
              className="btn btn-primary"
            />
          </form>
          <div style={{ backgroundColor: "white" }}>
            {temperature !== null && (
              <p style={{ fontSize: "20px", marginTop: "20px" }}>
                Temperature: {Math.round(temperature)}°C
              </p>
            )}
            {weather && (
              <p style={{ fontSize: "20px", marginTop: "10px" }}>
                Weather: {weather}
              </p>
            )}
            {suggestion && (
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Suggestion: {suggestion}
              </p>
            )}
          </div>
        </center>
      </div>
    </div>
  );
};

export default EventPlanners;
