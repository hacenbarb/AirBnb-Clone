import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./index.css";
import data from "./data";

const Cards = data.map((el) => {
  return (
    <Card
      key={el.id}
      {...el}
    />
  );
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <div className="cards container">
      {Cards}
    </div>
  </React.StrictMode>
);
