import React from "react";
import bg from '../assets/bg.jpg'
import Products from "./Products";

export default function Homepage() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img height="550px" src={bg} className="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bold mb-0 ">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    <Products />

    </div>
    
  );
}
