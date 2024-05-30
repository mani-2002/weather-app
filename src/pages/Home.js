import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setTemp("Temparature in " + city + " is " + Math.round(celsius) + "°C");
      });
  };
  return (
    <div style={{ backgroundColor: "lightcyan", height: "90vh" }}>
      <center>
        <div style={{ paddingTop: "5vh" }}>
          <div style={{ fontSize: "5vh" }}>
            Find Temparature in Desired City, Use the Search Box Below...
          </div>
          <div>
            <div>
              <form onSubmit={submitHandler} style={{ marginTop: "5vh" }}>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={changeHandler}
                  placeholder="Enter City Name..."
                  className="form-control"
                  style={{ width: "40vh" }}
                />
                <br />
                <input
                  type="submit"
                  value="Get Temparature"
                  style={{ fontSize: "3vh" }}
                  className="btn btn-primary"
                />
              </form>
              <p style={{ fontSize: "3vh" }}>{temp}</p>
            </div>
          </div>
        </div>
      </center>
      <div style={{ height: "53vh", backgroundColor: "white", padding: "5vh" }}>
        <p style={{ fontWeight: "bold", fontSize: "4vh" }}>
          You Might Also Wanted to Temperature in Below Cities...
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <WeatherCard city="Nalgonda" />
          <WeatherCard city="Hyderabad" />
          <WeatherCard city="Khammam" />
          <WeatherCard city="Karimnagar" />
          <WeatherCard city="Adilabad" />
          <WeatherCard city="Peddapalli" />
          <WeatherCard city="Warangal" />
          <WeatherCard city="Nizamabad" />
          <WeatherCard city="Gadwal" />
          <WeatherCard city="Suryapet" />
          <WeatherCard city="Nagarkurnool" />
        </div>
      </div>
    </div>
  );
};

export default Home;
