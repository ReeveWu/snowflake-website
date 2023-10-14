import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
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
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // Get the selected file
    // Now you can do something with the selected file, like uploading it to a server
    console.log("Selected File:", file);
  };
  return (
    <CenteredContainer>
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
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => {
            const generatePromise = fetch(
              "https://jsonplaceholder.typicode.com/todos/1"
            )
              .then((response) => response.json())
              .then((data) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(data);
                  }, 1000);
                });
              });
            toast.promise(generatePromise, {
              loading: "處理中...",
              success: () => {
                setUserInput("");
                return <b>上傳成功</b>;
              },
              error: <b>上傳失敗</b>,
            });
          }}
        >
          <SendIcon
            sx={{ fontSize: 35 }}
            style={{ color: "#38a3a5", transform: "rotate(-30deg)" }}
          />
        </IconButton>
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
      </UploadContainer>
    </CenteredContainer>
  );
};

export default TypingBar;
