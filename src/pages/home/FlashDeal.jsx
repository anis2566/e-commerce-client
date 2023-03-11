import React from "react";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FlashCarousel from "./FlashCarousel";
const FlashDeal = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:500px)");

  return (
    <Box
      py={5}
      bgcolor="rgba(0,0,0,0.04)"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        px={isXs ? 2 : isMobile ? 5 : 10}
        width="100%"
      >
        <Box display="flex" gap="10px">
          <BoltOutlinedIcon color="secondary" fontSize="large" />
          <Typography
            variant={isXs ? "h5" : "h4"}
            fontWeight="bold"
            color="#2B3445"
            letterSpacing="2px"
          >
            Flash Deal
          </Typography>
        </Box>
        <Button endIcon={<ArrowRightIcon />} size={isXs ? "medium" : "large"}>
          View All
        </Button>
      </Box>
      <FlashCarousel />
    </Box>
  );
};

export default FlashDeal;
