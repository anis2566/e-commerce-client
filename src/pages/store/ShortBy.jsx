import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem, Box, Typography } from "@mui/material";
import { ArrowRight, ExpandLess } from "@mui/icons-material";

const DropdownButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
  },
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
  },
}));

const ShortBy = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsExpanded(false);
  };
  return (
    <Box display="flex" alignItems="center" gap="5px">
      <Typography variant="h6" fontSize="16px">
        Short By:
      </Typography>
      <Box>
        <DropdownButton
          id="dropdown-button"
          endIcon={isExpanded ? <ExpandLess /> : <ArrowRight />}
          onClick={handleClick}
          variant="outlined"
          sx={{
            width: "160px",
          }}
        >
          Newest
        </DropdownButton>
        <Menu
          id="dropdown-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              minWidth: anchorEl?.getBoundingClientRect().width,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Newest</MenuItem>
          <MenuItem onClick={handleClose}>Oldest</MenuItem>
          <MenuItem onClick={handleClose}>Price Low to High</MenuItem>
          <MenuItem onClick={handleClose}>Price High to Low</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ShortBy;
