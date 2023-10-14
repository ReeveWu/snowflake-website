import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="">
          <h1>成年璃。從心開始</h1>
        </Link>
        <div className="links mr-10">
          <Link to="">
            <button className="btn nav-component cbtn btn-primary">首頁</button>
          </Link>
          <Link to="">
            <span className="nav-component">活動簡介</span>
          </Link>
          <Link to="">
            <span className="nav-component">線上活動</span>
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
