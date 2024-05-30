import React, { useState, useEffect } from "react";
import cloudAndSun from "../images/cloud_and_sun.gif";
const WeatherCard = ({ city }) => {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.main) {
            const kelvin = data.main.temp;
            const celsius = kelvin - 273.15;
            setTemp(Math.round(celsius) + "°C");
          } else {
            setTemp("N/A");
          }
        })
        .catch(() => setTemp("N/A"));
    }
  }, [city]);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "30vh",
        padding: "2vh",
        borderRadius: "10px",
        marginRight: "3vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginBottom: "2vh",
      }}
    >
      <b style={{ fontSize: "3vh" }}>{city}</b>
      <img src={cloudAndSun} alt="" style={{ width: "10vh", height: "10vh" }} />
      <p>{temp ? `Temperature: ${temp}` : "Loading..."}</p>
    </div>
  );
};

export default WeatherCard;
