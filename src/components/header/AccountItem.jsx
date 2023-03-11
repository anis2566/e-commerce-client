import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge, IconButton, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const AccountItem = ({ icon, title, path }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);
  return (
    <IconButton>
      <Badge
        badgeContent={5}
        color="primary"
        sx={{
          padding: "0 5px",
          borderRadius: "5px",
          backgroundColor: activeMenu === path ? "#fff" : null,
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
        component={Link}
        to={path}
      >
        <Tooltip title={title}>{icon}</Tooltip>
      </Badge>
    </IconButton>
  );
};

export default AccountItem;
