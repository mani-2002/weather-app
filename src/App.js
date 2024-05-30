import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import EventPlanners from "./pages/EventPlanners";
import Farmers from "./pages/Farmers";
import Travellers from "./pages/Travellers";
import MyExperience from "./pages/MyExperience";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: "times new roman" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-experience" element={<MyExperience />} />
          <Route path="/event-planners" element={<EventPlanners />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/travellers" element={<Travellers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
