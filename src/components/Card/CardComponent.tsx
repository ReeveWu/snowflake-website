import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { sliderClasses } from "@mui/material";

interface Props {
  imageFile: string;
  commentText: string;
  cardWidth: number;
  showOnePost: (image: string, comment: string) => void;
}

const CardComponent = ({
  imageFile,
  commentText,
  cardWidth,
  showOnePost,
}: Props) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageFile;

    image.onload = () => {
      const width = image.width;
      const height = image.height;
      setImageDimensions({ width, height });
    };
  }, []);

  return (
    <Card
      sx={{
        width: cardWidth,
        "&:hover": {
          boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <CardMedia
        onClick={() => {
          showOnePost(imageFile, commentText);
        }}
        sx={{
          height: Number(
            imageDimensions.width > cardWidth
              ? (imageDimensions.height * cardWidth) / imageDimensions.width
              : imageDimensions.height
          ),
        }}
        image={imageFile}
      />
      <CardContent
        onClick={() => {
          showOnePost(imageFile, commentText);
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ width: "100%", wordWrap: "break-word" }}
        >
          {commentText.length > 150
            ? commentText.slice(0, 150) + "..."
            : commentText}
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
        <IconButton
          size="small"
          style={{ color: "#38a3a5" }}
          onClick={() => setIsLike(!isLike)}
        >
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
