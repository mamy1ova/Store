import { styled } from "@mui/material";
import React from "react";

const ProductsItem = ({ title, description, price, brand, images }) => {
  return (
    <StyledContainer>
      <span>
        <h2>{title}</h2>
        <img src={images[0]} alt="img" />
        <p>{description}</p>
        <p>Price: {price}$</p>
        <p>Brand: {brand}</p>
      </span>
    </StyledContainer>
  );
};

export default ProductsItem;

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  padding: "2rem",
  width: "20rem",
  height: "30rem",
  paddingTop: "3rem",
  boxShadow:
    "0.5px 2.3px 10px rgba(75, 74, 74, 0.349), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.336)",

  "& h2": {
    paddingBottom: "2rem",
  },

  "& img": {
    width: "15rem",
    height: "12rem",
  },

  "& p": {
    paddingBottom: "0.2rem",
    paddingTop: "0.5rem",
  },
});
