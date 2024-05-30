import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";
const NavBar = () => {
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
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link to="/my-experience" style={{ textDecoration: "none" }}>
              My Personal Exp.
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link to="/event-planners" style={{ textDecoration: "none" }}>
              Event Planners
            </Link>
          </li>
          <li style={{ marginRight: "5vh" }}>
            <Link to="/farmers" style={{ textDecoration: "none" }}>
              Farmers
            </Link>
          </li>
          <li style={{ marginRight: "18vh" }}>
            <Link to="/travellers" style={{ textDecoration: "none" }}>
              Travellers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
