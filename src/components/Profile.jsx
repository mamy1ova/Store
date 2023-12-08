import { Button, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <StyledProfile>
      <h1>Profile</h1>
      <Link to="/mainPage">
        <Button type="submit" variant="contained">
          BACK
        </Button>
      </Link>
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  "& h1": {
    textAlign: "center",
    marginTop: "10%",
  },

  "& .MuiButton-root": {
    width: "20rem",
    height: "56px",
  },
});
