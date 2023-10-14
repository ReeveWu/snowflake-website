import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  width: 680px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

export const SearchBarTitle = styled.h2`
  color: #38a3a5;
  font-weight: 600;
  font-size: 60px;
  letter-spacing: 0.05em;
`;

export const SearchBarRow = styled.div`
  width: 100%;
  padding: 11px 10px;
  background: none;
  border: 1px solid black;
  border-radius: 30px;
`;

export const CusInput = styled.input`
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

export const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  color: #38a3a5;
  font-size: 20px;
  border: 1.5px solid #38a3a5;
  border-radius: 10px;
  background: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #38a3a5;
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
    background-color: #38a3a5;
  }
`;
