import { Box } from "@mui/material";
import React from "react";

import Banner from "./Banner";
import FlashDeal from "./FlashDeal";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Banner />
      <FlashDeal />
      <NewArrival />
    </Box>
  );
};

export default Home;
