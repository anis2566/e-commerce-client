import React from "react";

import { Box, useMediaQuery } from "@mui/material";
import SocialAccount from "./SocialAccount";
import NavTab from "./NavTab";

const Navbar = () => {
  const isDesktop = useMediaQuery("(max-width:1100px)");
  const isXs = useMediaQuery("(max-width:520px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      bgcolor="#232F3E"
      color="#fff"
      px={5}
      sx={{ padding: isDesktop ? "5px 25px" : "11px 125px" }}
    >
      <NavTab />
      {/* {!isXs && <SocialAccount />} */}
    </Box>
  );
};

export default Navbar;
