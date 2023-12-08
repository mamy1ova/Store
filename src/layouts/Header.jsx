import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <img
        src="https://images.vexels.com/media/users/3/142810/isolated/preview/ba0c22cef0e0d4a277d74333536482d9-shield-emblem-logo.png"
        alt="img"
      />
      <Link to="/signIn">
        <button>Sing in</button>
      </Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled("div")({
  backgroundColor: "#1876d1",
  width: "100%",
  height: "4rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& img": {
    width: "3rem",
    height: "3rem",
    marginLeft: "2rem",
  },

  "& button": {
    marginRight: "2rem",
    width: "3.8rem",
    height: "2rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",

    ":hover": {
      backgroundColor: "black",
      color: "white",
      transition: "0.6s",
    },
  },
});
