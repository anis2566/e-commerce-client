import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { Favorite, Visibility, ShoppingCart } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const [hoverd, setHoverd] = useState(false);

  return (
    <Card
      sx={{ padding: "20px", width: "250px", minHeight: "300px" }}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      elevation={hoverd ? 7 : 1}
    >
      <Chip label="10% Off" color="warning" />
      <Box position="relative">
        <Box
          position="absolute"
          right={hoverd ? "0" : "-30%"}
          top="0"
          display="flex"
          flexDirection="column"
          sx={{ transition: "all 0.3s linear" }}
        >
          <IconButton>
            <Visibility fontSize="small" />
          </IconButton>
          <IconButton>
            <Favorite fontSize="small" />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center">
          <img
            src={
              product.images
                ? product.images[0].secure_url
                : `https://www.freeiconspng.com/thumbs/iphone-x-pictures/iphone-x-and-iphone-8-png-12.png`
            }
            alt="product"
            style={{
              transform: hoverd ? "scale(0.8)" : "scale(0.6)",
              transition: "all 0.2s ease-in-out",
              height: "150px",
              width: "auto",
            }}
          />
        </Box>
        <Typography variant="h5" fontSize="17px" sx={{ color: "#B6B8BE" }}>
          {product.name}
        </Typography>
        <Box display="flex" alignItems="center" gap="15px">
          <Typography variant="h5" fontSize="20px" fontWeight="bold">
            {product.discountedPrice
              ? `$${product.discountedPrice}`
              : `$${product.price}`}
          </Typography>
          <Typography
            variant="h5"
            fontSize="16px"
            fontWeight="bold"
            sx={{ textDecoration: "line-through", color: "#F3A847" }}
          >
            {product.discountedPrice && product.price}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          <Rating
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <Chip label="20 in Stock" size="small" color="info" />
        </Box>
        <Button
          variant={hoverd ? "contained" : "outlined"}
          fullWidth
          color="warning"
          endIcon={<ShoppingCart />}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
