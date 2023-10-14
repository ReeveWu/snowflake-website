import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.jpg";
import NavBar from "./components/NavBar/NavBar";
import Home from "./page/Home";
import CardPage from "./page/CardPage";

function App() {
  return (
    <Router basename="/snowflake-website">
      <div className="App">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Home />
                </div>
              }
            />
            <Route path="/about" element={<div>Coming soon...</div>} />
            <Route
              path="/show-opinion"
              element={
                <div>
                  <CardPage />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <p>Not Found</p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
