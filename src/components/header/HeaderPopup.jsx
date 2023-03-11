import React from "react";

import { Box, Dialog, Tab, Tabs } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import LoginForm from "../form/loginForm";
import RegisterForm from "../form/registerForm";

const HeaderPopup = ({ open, handleClose }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = (value) => {
    switch (value) {
      case 0:
        return <LoginForm setValue={setValue} />;
      case 1:
        return <RegisterForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box p={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
        >
          <Tab
            label="Login"
            sx={{ fontWeight: "bold" }}
            icon={<LoginIcon />}
            iconPosition="start"
          />
          <Tab
            label="Register"
            sx={{ fontWeight: "bold" }}
            icon={<HowToRegIcon />}
            iconPosition="start"
          />
        </Tabs>
        <React.Fragment>{renderTabContent(value)}</React.Fragment>
      </Box>
    </Dialog>
  );
};

export default HeaderPopup;
