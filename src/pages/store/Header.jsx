import React from "react";

import { Box } from "@mui/material";
import Category from "./Category";
import ShortBy from "./ShortBy";

const Header = () => {
  return (
    <Box
      width="90%"
      sx={{ padding: "10px 20px" }}
      bgcolor="#fff"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Category />
      <Box display="flex">
        <ShortBy />
      </Box>
    </Box>
  );
};

export default Header;
