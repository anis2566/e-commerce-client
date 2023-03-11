import React from "react";

import { Box } from "@mui/material";

const FlexCenter = (props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" {...props}>
      {props.children}
    </Box>
  );
};

export default FlexCenter;
