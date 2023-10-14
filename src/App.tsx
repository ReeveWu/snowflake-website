import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.jpg";
import NavBar from "./components/NavBar/NavBar";
import Home from "./page/Home";

function App() {
  return (
    <Router basename="/snowflake-website">
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div className="content">
          <Routes>
            {/* <Route
              path="/create-expenditure"
              element={
                <div className="mb-5">
                  <ExpenditureForm />
                </div>
              }
            />
            <Route
              path="/create-income"
              element={
                <div className="mb-5">
                  <IncomeForm />
                </div>
              }
            /> */}
            <Route
              path="/"
              element={
                <div>
                  <Home />
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
