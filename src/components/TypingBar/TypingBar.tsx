import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SearchBarTitle = styled.h2`
  color: #38a3a5;
  font-weight: 600;
  font-size: 60px;
  letter-spacing: 0.05em;
`;

const SearchBarRow = styled.div`
  width: 700px;
  padding: 11px 10px;
  background: none;
  border: 1px solid black;
  border-radius: 30px;
`;

const CusInput = styled.input`
  background: transparent;
  color: black;
  border: none;
  padding: 0.5rem;
  outline: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
`;

const TypingBar = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <CenteredContainer>
      <SearchBarContainer>
        <SearchBarTitle>寫下你對玻璃心的定義</SearchBarTitle>
        <SearchBarRow>
          <CusInput
            key="search-bar"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Typing something..."
          />
        </SearchBarRow>
      </SearchBarContainer>
    </CenteredContainer>
  );
};

export default TypingBar;
