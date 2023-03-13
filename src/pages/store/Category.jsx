import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Dashboard,
  ArrowRight,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";

const DropdownButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
  },
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing(1),
  },
}));

const Dropdown = () => {
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

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("http://localhost:8080/api/category/all");
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <DropdownButton
        id="dropdown-button"
        startIcon={<Dashboard />}
        endIcon={isExpanded ? <ExpandLess /> : <ArrowRight />}
        onClick={handleClick}
        variant="outlined"
      >
        Categories
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
        {categories.map((category) => (
          <MenuItem key={category._id} onClick={handleClose}>
            {category.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
