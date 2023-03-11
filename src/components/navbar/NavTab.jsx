import React from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const NavTab = () => {
  const { pathname } = useLocation();

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          color: "#fff",
          textDecoration: pathname === "/" ? "underline" : "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        LinkComponent={Link}
        to="/"
      >
        Home
      </Button>
      <Button
        variant="text"
        sx={{
          color: "#fff",
          textDecoration: pathname === "/store" ? "underline" : "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        LinkComponent={Link}
        to="/store"
      >
        Our Store
      </Button>
      <Button
        variant="text"
        sx={{
          color: "#fff",
          textDecoration: pathname === "/blog" ? "underline" : "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        LinkComponent={Link}
        to="/blog"
      >
        Blog
      </Button>
      <Button
        variant="text"
        sx={{
          color: "#fff",
          textDecoration: pathname === "/contact" ? "underline" : "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        LinkComponent={Link}
        to="/contact"
      >
        Contact
      </Button>
    </Box>
  );
};

export default NavTab;
