import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import AccountItem from "./AccountItem";
import { Box, Tooltip, useMediaQuery } from "@mui/material";
import FlexCenter from "../FlexCenter";
import HeaderPopup from "./HeaderPopup";

const Account = () => {
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
    <Box display="flex" alignItems="center">
      {!isMobile && (
        <AccountItem
          icon={
            <FavoriteIcon color="warning" fontSize={isXs ? "small" : "large"} />
          }
          title="Wishlist"
          path="/wishlist"
        />
      )}
      {!isMobile && (
        <AccountItem
          icon={
            <NotificationsIcon
              color="warning"
              fontSize={isXs ? "small" : "large"}
            />
          }
          title="Notifications"
          path="/notifications"
        />
      )}
      <AccountItem
        icon={
          <ShoppingCartIcon
            color="warning"
            fontSize={isXs ? "small" : "large"}
          />
        }
        title="Cart"
        path="/cart"
      />
      <Box>
        <FlexCenter
          bgcolor="#ED6C01"
          borderRadius="5px"
          ml={1}
          sx={{ padding: "0 5px", cursor: "pointer" }}
          onClick={handleOpen}
        >
          <Tooltip title="Login/Register">
            <PersonIcon fontSize={isXs ? "small" : "large"} color="inherit" />
          </Tooltip>
        </FlexCenter>
        <>
          <HeaderPopup open={open} handleClose={handleClose} />
        </>
      </Box>
    </Box>
  );
};

export default Account;
