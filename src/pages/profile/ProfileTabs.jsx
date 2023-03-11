import React from "react";

import { Box, Tab, Tabs } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ReceiptIcon from "@mui/icons-material/Receipt";

const ProfileTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box display="flex">
      <Tabs value={value} onChange={handleChange} orientation="vertical">
        <Tab label="Personal" icon={<PersonIcon />} iconPosition="start" />
        <Tab label="Account" icon={<KeyIcon />} iconPosition="start" />
        <Tab label="Orders" icon={<ReceiptIcon />} iconPosition="start" />
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
