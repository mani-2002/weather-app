import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";
const NavBar = () => {
  const [selected, setSelected] = useState("");
  const handleClick = (buttonName) => {
    setSelected(buttonName);
  };
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "lightblue",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10vh",
      }}
    >
      <div
        style={{
          fontFamily: "times new roman",
          fontSize: "5vh",
          color: "magenta",
          paddingLeft: "5vh",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", fontSize: "8vh", color: "black" }}
          onClick={() => handleClick("Home")}
        >
          <img
            src={logo}
            alt="this is logo"
            style={{ height: "5vh", width: "8vh", marginBottom: "2vh" }}
          />
          Weather App
        </Link>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: "0",
            height: "6.5vh",
            alignItems: "center",
          }}
        >
          <li style={{ marginRight: "5vh" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: selected === "Home" ? "bold" : "normal",
              }}
              onClick={() => handleClick("Home")}
            >
              Home
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link
              to="/my-experience"
              style={{
                textDecoration: "none",
                fontWeight: selected === "My Personal Exp." ? "bold" : "normal",
              }}
              onClick={() => handleClick("My Personal Exp.")}
            >
              My Personal Exp.
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link
              to="/event-planners"
              style={{
                textDecoration: "none",
                fontWeight: selected === "Event Planners" ? "bold" : "normal",
              }}
              onClick={() => handleClick("Event Planners")}
            >
              Event Planners
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link
              to="/farmers"
              style={{
                textDecoration: "none",
                fontWeight: selected === "Farmers" ? "bold" : "normal",
              }}
              onClick={() => handleClick("Farmers")}
            >
              Farmers
            </Link>
          </li>
          <li style={{ marginRight: "18vh" }}>
            <Link
              to="/travellers"
              style={{
                textDecoration: "none",
                fontWeight: selected === "Travellers" ? "bold" : "normal",
              }}
              onClick={() => handleClick("Travellers")}
            >
              Travellers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
