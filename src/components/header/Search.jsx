import React from "react";

import { Box, InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import FlexCenter from "../FlexCenter";

const Search = () => {
  const isXs = useMediaQuery("(max-width:500px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bgcolor="#fff"
      color="#000"
      pl={1}
      sx={{ borderRadius: "5px" }}
      maxWidth="500px"
      flex={1}
    >
      <InputBase
        placeholder="Search...."
        sx={{ padding: isXs ? "0" : "5px 0", flexGrow: 1 }}
      />
      <FlexCenter
        bgcolor="#f6b662"
        px={2}
        sx={{
          cursor: "pointer",
          borderRadius: "0 5px 5px 0",
          "&:hover": {
            backgroundColor: "#F3A847",
            color: "#fff",
          },
        }}
      >
        <SearchIcon />
      </FlexCenter>
    </Box>
  );
};

export default Search;
