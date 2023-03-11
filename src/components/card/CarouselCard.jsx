import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  Chip,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Visibility } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CarouselCard = () => {
  const [itemCount, setItemCount] = useState(0);
  const [isHoverd, setIshoverd] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const increaseCount = () => {
    setItemCount((prevState) => prevState + 1);
  };

  const decreaseCount = () => {
    setItemCount((prevState) => prevState - 1);
  };

  return (
    <Card
      sx={{
        maxWidth: "300px",
        mt: 2,
        p: 2,
      }}
      onMouseEnter={() => setIshoverd(true)}
      onMouseLeave={() => setIshoverd(false)}
      elevation={2}
    >
      <Box display="flex" justifyContent="space-between" position="relative">
        <Chip label="15% off" color="warning" />
        {isHoverd ? (
          <SpeedDial
            ariaLabel="SpeedDial example"
            icon={<SpeedDialIcon />}
            open={isHoverd}
            onClose={() => setIshoverd(false)}
            direction="up"
            hidden
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <SpeedDialAction
              key="wishlist"
              icon={
                wishlist ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
              }
              tooltipTitle="Add to Wishlist"
              onClick={() => setWishlist(!wishlist)}
            />
            <SpeedDialAction
              key="view"
              icon={<Visibility />}
              tooltipTitle="View"
              onClick={() => console.log("Delete clicked")}
            />
          </SpeedDial>
        ) : null}
      </Box>
      <Box display="flex" justifyContent="center" height="200px">
        <img
          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1920&q=75"
          alt="watch"
          style={{ height: "100%" }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" height="35px">
        <Typography variant="h6" fontSize={18} color="#737885">
          Classic Rolex Watch
        </Typography>
        {itemCount > 0 && (
          <Button variant="outlined" onClick={decreaseCount} color="secondary">
            <RemoveIcon fontSize="small" />
          </Button>
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        boxSizing="border-box"
      >
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
        <Typography variant="body-2" fontSize={18} fontWeight="bold" pr={3}>
          {itemCount}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" gap="10px">
          <Typography variant="body1" color="red" fontWeight="bold">
            ৳1000
          </Typography>
          <Typography
            variant="body1"
            color="#7D879C"
            fontWeight="bold"
            sx={{
              textDecoration: "line-through",
            }}
          >
            ৳1500
          </Typography>
        </Box>
        <Button variant="outlined" color="primary" onClick={increaseCount}>
          <AddIcon fontSize="small" />
        </Button>
      </Box>
    </Card>
  );
};

export default CarouselCard;
