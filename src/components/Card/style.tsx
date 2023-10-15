import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const AddPostButton = styled(IconButton)({
  background: "#38a3a5",
  position: "fixed",
  bottom: "30px",
  right: "30px",
  transition: "box-shadow 0.5s ease",
  "&:hover": {
    backgroundColor: "#38a3a5",
    borderColor: "none",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
  },
});
