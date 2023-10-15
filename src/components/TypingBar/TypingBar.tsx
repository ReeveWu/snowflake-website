import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  CenteredContainer,
  SearchBarContainer,
  SearchBarRow,
  SearchBarTitle,
  CusInput,
  UploadContainer,
  UploadButton,
} from "./style";

const TypingBar = () => {
  const [userInput, setUserInput] = useState("");
  const [fileName, setFileName] = useState("fnn,mnfm,gn,mfnm,");
  const [isUploadFile, setIsUploadFile] = useState(false);
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // Get the selected file
    // Now you can do something with the selected file, like uploading it to a server
    setIsUploadFile(true);
    setFileName(file.name);
  };
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        width: "680px",
        height: "85vh",
      }}
    >
      <SearchBarTitle>說到玻璃心，你會想到...</SearchBarTitle>

      <SearchBarContainer>
        <SearchBarRow>
          <CusInput
            key="search-bar"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="寫點東西..."
          />
        </SearchBarRow>
      </SearchBarContainer>
      <UploadContainer>
        {isUploadFile ? (
          <Alert
            icon={false}
            action={
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  setIsUploadFile(false);
                  setFileName("");
                }}
              >
                <DeleteOutlineIcon
                  sx={{ fontSize: 25, opacity: 0.8, marginTop: -0.5 }}
                />
              </IconButton>
            }
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: "60px",
              color: "#38a3a5",
              fontSize: "20px",
              border: "1.5px solid #38a3a5",
              borderRadius: "10px",
              background: "none",
            }}
          >
            <ImageIcon style={{ color: "#38a3a5", fontSize: 25 }} />
            {` ${fileName}`}
          </Alert>
        ) : (
          <>
            <UploadButton htmlFor="file-upload">
              <span style={{ position: "relative", top: "-1px" }}>
                選擇要上傳的檔案
              </span>
            </UploadButton>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </>
        )}
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => {
            if (userInput) {
              const generatePromise = fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
              )
                .then((response) => response.json())
                .then((data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      console.log("data", data);
                      resolve(data);
                    }, 1000);
                  });
                });
              toast
                .promise(generatePromise, {
                  loading: "處理中...",
                  success: () => {
                    setUserInput("");
                    setIsUploadFile(false);
                    setFileName("");

                    return <b>上傳成功</b>;
                  },
                  error: <b>上傳失敗</b>,
                })
                .then(() => {
                  setTimeout(() => {
                    navigate("/posts");
                  }, 300);
                });
            } else {
              toast.error("請輸入內容！");
            }
          }}
        >
          <SendIcon
            sx={{ fontSize: 35 }}
            style={{ color: "#38a3a5", transform: "rotate(-30deg)" }}
          />
        </IconButton>
      </UploadContainer>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#38a3a5",
              secondary: "white",
            },
          },
        }}
      />
    </Stack>
  );
};

export default TypingBar;
