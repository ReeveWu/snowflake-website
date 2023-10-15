import React from "react";
import TypingBar from "../components/TypingBar/TypingBar";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid container spacing={2} style={{ width: "100vw", height: "80vh" }}>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="Logo" />
      </Grid>
      <Grid item xs={6}>
        <TypingBar />
      </Grid>
    </Grid>
  );
};

export default Home;
