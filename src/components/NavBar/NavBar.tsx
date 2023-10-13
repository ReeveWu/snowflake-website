import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>成年璃。從心開始</h1>
        </Link>
        <div className="links mr-10">
          <Link to="/">
            <button className="btn nav-component cbtn btn-primary">Home</button>
          </Link>
          <Link to="/create-expenditure">
            <span className="nav-component">About</span>
          </Link>
          <Link to="/create-income">
            <span className="nav-component">Join us</span>
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
