import React from "react";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FiberNewIcon from "@mui/icons-material/FiberNew";

const NewArrival = () => {
  const isXs = useMediaQuery("(max-width:500px)");
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box py={5} width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        px={isXs ? 2 : isMobile ? 5 : 10}
        width="100%"
      >
        <Box display="flex" gap="10px">
          <FiberNewIcon color="secondary" fontSize="large" />
          <Typography
            variant={isXs ? "h5" : "h4"}
            fontWeight="bold"
            letterSpacing="2px"
          >
            Flash Deal
          </Typography>
        </Box>
        <Button endIcon={<ArrowRightIcon />} size={isXs ? "medium" : "large"}>
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default NewArrival;
