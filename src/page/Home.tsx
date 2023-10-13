import React from "react";
import TypingBar from "../components/TypingBar/TypingBar";
import logo from "../assets/logo.jpg";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img src={logo} alt="Logo" />
      </Grid>
      <Grid item xs={6}>
        <TypingBar />
      </Grid>
    </Grid>
  );
};

export default Home;
