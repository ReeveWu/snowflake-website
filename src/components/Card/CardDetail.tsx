import React, { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import imageFile from "../../assets/demo.jpg";

interface Props {
  imageFile: string;
  commentText: string;
  setOnePostVisible: () => void;
}

const CardDetail = ({ imageFile, commentText, setOnePostVisible }: Props) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);
  useEffect(() => {
    if (boxRef.current) {
      const height = boxRef.current.getBoundingClientRect().height;
      setImageHeight(height);
    }
    const imageObject = new Image();
    imageObject.src = imageFile;

    imageObject.onload = () => {
      setImageWidth((imageObject.width * imageHeight) / imageObject.height);
    };
  });
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "fixed",
        top: "100px",
        left: "0px",
        zIndex: "1001",
      }}
    >
      <Box
        ref={boxRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: `${imageWidth + window.innerWidth * 0.2}px`,
          height: "55%",
          borderRadius: "1em",
          background: "white",
        }}
      >
        <Stack direction="row">
          <Card
            style={{
              width: `${imageWidth}px`,
              borderRadius: "1em 0em 0em 1em",
            }}
          >
            <CardMedia
              sx={{
                height: `${imageHeight}px`,
              }}
              image={imageFile}
            />
          </Card>
          <Typography
            variant="body1"
            style={{
              padding: "25px",
              width: `${window.innerWidth * 0.2}px`,
              height: `${imageHeight}px`,
              fontSize: "18px",
              fontWeight: "300",
              lineHeight: "1.5em",
              letterSpacing: "0.07em",
              overflow: "auto",
            }}
          >
            {commentText}
          </Typography>
        </Stack>
        <IconButton
          aria-label="close"
          size="small"
          sx={{
            position: "relative",
            transform: "translate(-50%, -50%)",
            top: `-${imageHeight}px`,
            left: `${imageWidth + window.innerWidth * 0.2}px`,
            background: "#38a3a5",
            color: "white",
          }}
          onClick={() => setOnePostVisible()}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default CardDetail;
