import React from "react";

import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Personal from "./Personal";
import Account from "./Account";
import Orders from "./Orders";

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderEl = (value) => {
    switch (value) {
      case 0:
        return <Personal />;
      case 1:
        return <Account />;
      case 2:
        return <Orders />;
      default:
        return <Personal />;
    }
  };
  return (
    <Box height="87vh" pt={5} px={isMobile ? 2 : 10} bgcolor="rgba(0,0,0,0.05)">
      <Box
        display="flex"
        justifyContent="space-between"
        bgcolor="#fff"
        py={3}
        px={4}
      >
        <Typography variant="h5">Profile</Typography>
      </Box>
      <Box
        bgcolor="#fff"
        py={3}
        px={4}
        mt={3}
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          orientation={isMobile ? "horizontal" : "vertical"}
          sx={{
            "& .MuiTab-root": {
              minWidth: isMobile ? "initial" : "unset",
              maxWidth: isMobile ? "initial" : "unset",
            },
          }}
        >
          <Tab
            label="Personal"
            icon={isMobile ? null : <PersonIcon />}
            iconPosition="start"
          />
          <Tab
            label="Account"
            icon={isMobile ? null : <KeyIcon />}
            iconPosition="start"
          />
          <Tab
            label="Orders"
            icon={isMobile ? null : <ReceiptIcon />}
            iconPosition="start"
          />
        </Tabs>
        <Box mt={isMobile ? 5 : 0} pl={isMobile ? 0 : 10} maxWidth="400px">
          {renderEl(value)}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
