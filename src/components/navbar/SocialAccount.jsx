import React from "react";

import { Box, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialAccount = () => {
  return (
    <Box display="flex" gap="10px" alignItems="center">
      <Typography variant="body2">Follow Us</Typography>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FacebookOutlinedIcon sx={{ color: "#fff", cursor: "pointer" }} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <TwitterIcon sx={{ color: "#fff", cursor: "pointer" }} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <InstagramIcon sx={{ color: "#fff", cursor: "pointer" }} />
      </a>
    </Box>
  );
};

export default SocialAccount;
