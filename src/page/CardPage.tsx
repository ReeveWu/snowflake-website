import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import demoImage from "../assets/demo.jpg";
import demoImage1 from "../assets/demo1.jpg";
import demoImage2 from "../assets/demo2.jpg";
import demoImage3 from "../assets/demo3.jpg";
import demoImage4 from "../assets/demo4.jpg";
import demoImage5 from "../assets/demo5.jpg";
import CardComponent from "../components/Card/CardComponent";
import CardDetail from "../components/Card/CardDetail";
import { Link } from "react-router-dom";
import { AddPostButton } from "../components/Card/style";
import postsComment from "../data/postsComment";

const imageList = [
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
  demoImage,
  demoImage1,
  demoImage2,
  demoImage3,
  demoImage4,
  demoImage5,
];

const CardPage = () => {
  const cardComponents = [];
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setCardWidth(screenWidth / 4 - screenWidth * 0.02);
  }, []);

  const [isShowOnePost, setIsShowOnePost] = useState(false);
  const [showPostImage, setIsShowPostImage] = useState("");
  const [showPostComment, setIsShowPostComment] = useState("");

  const showOnePost = (
    image: React.SetStateAction<string>,
    comment: React.SetStateAction<string>
  ) => {
    setIsShowOnePost(true);
    setIsShowPostImage(image);
    setIsShowPostComment(comment);
  };

  const closeOnePost = () => setIsShowOnePost(false);

  for (let i = 0; i < 4; i++) {
    cardComponents.push(
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
          return index % 4 == i ? (
            <CardComponent
              key={index}
              imageFile={item}
              cardWidth={cardWidth}
              commentText={postsComment[index % 7]}
              showOnePost={showOnePost}
            />
          ) : null;
        })}
      </Stack>
    );
  }
  return (
    <>
      <Grid container spacing={1}>
        {cardComponents.map((item, index) => (
          <Grid item xs={3}>
            {item}
          </Grid>
        ))}
      </Grid>
      <Link to="/">
        <AddPostButton>
          <AddIcon sx={{ fontSize: "50px", color: "white" }} />
        </AddPostButton>
      </Link>
      {isShowOnePost ? (
        <CardDetail
          imageFile={showPostImage}
          commentText={showPostComment}
          setOnePostVisible={closeOnePost}
        />
      ) : null}
    </>
  );
};

export default CardPage;
