import React, { useEffect, useState } from "react";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    text: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    text: "Orders",
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
];

const DrawerItem = ({ handleClose }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box width="180px">
      <List>
        {navItems.map(({ text, icon }) => {
          const lcText = text.toLowerCase();

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(`/${lcText}`);
                  setActive(lcText);
                  handleClose();
                }}
                sx={{ bgcolor: "", my: 1 }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                {active === lcText && <ChevronRightIcon sx={{ ml: "auto" }} />}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default DrawerItem;
