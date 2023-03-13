import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack } from "@mui/material";

import ProductCard from "../../components/card/ProductCard";
import Header from "./Header";

const Store = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`http://localhost:8080/api/product/all`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      bgcolor="#F6F9FC"
      spacing={5}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          gap: "40px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </Stack>
  );
};

export default Store;
