import React from "react";

import { Drawer, Box } from "@mui/material";
import DrawerHeader from "./DrawerHeader";
import DrawerItem from "./DrawerItem";

const DrawerCom = ({ open, handleClose }) => {
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box width="180px" px={2} sx={{ bgcolor: "#131921" }}>
        <DrawerHeader handleClose={handleClose} />
      </Box>
      <DrawerItem handleClose={handleClose} />
    </Drawer>
  );
};

export default DrawerCom;
