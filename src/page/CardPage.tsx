import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import demoImage from "../assets/demo.jpg";
import demoImage1 from "../assets/demo1.jpg";

const imageList = [demoImage, demoImage1];

const CardPage = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const image = new Image();
    image.src = demoImage;

    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setImageDimensions({ width, height });
    };
  }, []);
  console.log(imageDimensions);

  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {imageList.map((item, index) => {
        return (
          <Card sx={{ width: 345 }}>
            <CardMedia
              sx={{
                height: Number(
                  imageDimensions.width > 345
                    ? (imageDimensions.height * 345) / imageDimensions.width
                    : imageDimensions.height
                ),
              }}
              image={demoImage}
            />
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography> */}
              <Typography variant="body1" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "flex-start",
                marginRight: "10px",
                gap: "10px",
              }}
            >
              <IconButton size="small" style={{ color: "#38a3a5" }}>
                <ShareIcon />
              </IconButton>
              <IconButton size="small" style={{ color: "#38a3a5" }}>
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default CardPage;
