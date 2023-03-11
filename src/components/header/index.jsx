import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { AppBar, Link, Box, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Search from "./Search";
import Account from "./Account";
import DrawerCom from "./DrawerCom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  // media quary
  const isMobile = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:500px)");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isXs ? "10px 5px" : isMobile ? "10px 20px" : "10px 100px",
          backgroundColor: "#131921",
          color: "#fff",
          gap: isXs ? "5px" : "10px",
        }}
      >
        {isMobile ? (
          <IconButton color="warning" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Link
            component={RouterLink}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Link>
        )}

        <Search />
        <Account />
        <DrawerCom open={open} handleClose={handleClose} />
      </Box>
    </AppBar>
  );
};

export default Header;
