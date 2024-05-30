import React, { useState } from "react";

const TravelPlanner = () => {
  const [temperature, setTemperature] = useState(null);
  const [weather, setWeather] = useState(null);
  const [suggestion, setSuggestion] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      );
      const data = await response.json();
      const kelvinTemp = data.main.temp;
      const celsiusTemp = kelvinToCelsius(kelvinTemp);
      const weatherCondition = data.weather[0].main;
      setTemperature(celsiusTemp);
      setWeather(weatherCondition);
      setTravelSuggestion(celsiusTemp, weatherCondition);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const setTravelSuggestion = (temperature, weatherCondition) => {
    if (temperature < 5 || temperature > 35 || weatherCondition === "Rain") {
      setSuggestion(
        "It is not advisable to travel due to extreme weather conditions."
      );
    } else {
      setSuggestion("It is a good time to travel.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    fetchWeather(city);
  };

  return (
    <div>
      <div style={{ backgroundColor: "lightcyan", padding: "20px" }}>
        <center>
          <div style={{ fontSize: "24px", marginBottom: "20px" }}>
            Check if it's Good to Travel to Your Desired City
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
        </center>
      </div>
    </div>
  );
};

export default TravelPlanner;
