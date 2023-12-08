import React, { useEffect } from "react";
import Header from "../layouts/Header";
import ProductsItem from "./ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/products-slice";
import { styled } from "@mui/material";

const MainPage = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector((state) => state.products);
  console.log(items, "items");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {error && <p>Error: {error}</p>}
      <StyledContainer>
        {items?.map((product) => (
          <ProductsItem key={product.id} {...product} />
        ))}
      </StyledContainer>
    </div>
  );
};

export default MainPage;

const StyledContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "2rem",
  marginTop: "3rem",
});
