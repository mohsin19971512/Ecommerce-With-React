import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

export default function NavBar() {

  const {error} = useSelector((state)=>state.products)
  return (
    <div>
      {error &&(
        <div className="alert alert-danger">{error}</div>
      )}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" style={{color:"black"}}  to="/">
            LA Collaction
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"black"}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" style={{color:"black"}} >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color:"black"}} >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{color:"black"}} >
                  Contact
                </Link>
              </li>

            </ul>
            <div className="buttons">
                <Link className="btn btn-outline-dark" to="/login">
                   <i className="fa fa-sign-in me-1"></i> Login
                </Link>

                <Link className="btn btn-outline-dark ms-2" to="/register">
                   <i className="fa fa-user-plus me-1"></i> Register
                </Link>

                <Link className="btn btn-outline-dark  ms-2" to="/cart">
                   <i className="fa fa-shopping-cart me-1"></i> Cart(0)
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
