import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./style.css";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>成年璃。從心開始</h1>
      </Link>
      <div className="links">
        <Link to="/">
          <div
            className="nav-component"
            onClick={() => setCurrentPage(0)}
            style={{
              borderBottom: currentPage === 0 ? "5px solid #38a3a5" : "none",
            }}
          >
            <HomeIcon
              style={{
                fontSize: "32px",
              }}
            />
          </div>
        </Link>
        <Link to="/about">
          <div
            className="nav-component"
            onClick={() => setCurrentPage(1)}
            style={{
              borderBottom: currentPage === 1 ? "5px solid #38a3a5" : "none",
            }}
          >
            活動簡介
          </div>
        </Link>
        <Link to="/posts">
          <div
            className="nav-component"
            onClick={() => setCurrentPage(2)}
            style={{
              borderBottom: currentPage === 2 ? "5px solid #38a3a5" : "none",
            }}
          >
            玻璃心留言板
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
