import React from "react";

import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../../assets/logo.png";

const DrawerHeader = ({ handleClose }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="56px"
    >
      <img src={logo} alt="logo" style={{ width: "50px", height: "40px" }} />
      <Box
        borderRadius="50%"
        width="30px"
        height="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: "pointer",
          bgcolor: "#fff",
        }}
        onClick={handleClose}
      >
        <CloseIcon
          fontSize="small"
          sx={{
            color: "#000",
          }}
        />
      </Box>
    </Box>
  );
};

export default DrawerHeader;
