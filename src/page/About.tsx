import React from "react";
import logo from "../assets/logo.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Grid container spacing={2} style={{ width: "100vw", height: "90vh" }}>
      <Grid
        item
        xs={5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="Logo" />
      </Grid>
      <Grid
        item
        xs={7}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 40px",
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          style={{ lineHeight: "1.5em", letterSpacing: "0.05em" }}
        >
          你知道嗎？過去新竹也曾以玻璃工藝聞名，擁有一個璀璨的玻璃工藝品，更是社經地位的展現，夢回那個玻璃工藝風靡全球的黃金年代，客廳即工廠，為多少家庭帶來希望，甚至每個年輕人心中都有一個玻璃夢。
          <br />
          <br />
          數十年後，科技進步、產業外移，伴隨著的卻是年輕人的離開，現在提起新竹，人們討論的話題通常是半導體、科學園區、美食沙漠等等，玻璃工藝的美在社會迅速變遷的風潮中被遺落。
          <br />
          <br />
          而我們從新聞中發現，原因在於，老師傅們的技術還缺少著創新能量，專業技術的傳承還缺少著通路推廣。
          <br />
          <br />
          為了將玻璃工藝帶回年輕人的話題圈，我們將時下熱門的社會議題「玻璃心」作為行銷企劃切入點，並結合SDGs循環經濟議題，帶領z世代共同打造出，屬於我們的永續未來。
          <br />
          <br />
          『成年璃。從心開始』，團隊與在地玻璃工藝的機構，將共同策劃沉浸式展覽，在四大展區中，透過玻璃心的心境過程與玻璃工藝的結合，讓年輕人能有新的體驗，探討所謂長大是能照顧好自己的玻璃心，並且落實玻璃的正確回收，永續再製、循環經濟等實際行動。
          <br />
          <br />
          另外，在展覽籌備期我們將發起廢棄玻璃的回收行動，號召年輕人一起回收廢玻璃，並提供平台讓每個人上傳屬於自己的玻璃心，也將收集到的廢玻璃，經過老師傅的巧手再製成玻璃藝術品，展在成年璃中。
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
