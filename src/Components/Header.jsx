import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg  ">
        <div className="container mx-auto ">
          <div className="logo">
            <img src="./src/assets/img/logo/logocare.png" alt="" />
          </div>
          <button
            className="navbar-toggler fs-1  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon custom-icon"   />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 gap-5 mb-lg-0 text-center mb-4">
              <li className="nav-item fs-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item fs-2">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item fs-2">
                <a className="nav-link" href="#">
                  Training
                </a>
              </li>
              <li className="nav-item fs-2">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
            
              <li className="nav-item fs-2">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-none d-md-flex" role="search ">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
