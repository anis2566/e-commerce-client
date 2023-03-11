import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { changePassword } from "../../features/auth";

const Account = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(changePassword({ currentPassword, newPassword }));

    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  return (
    <Stack direction="column" width="100%">
      <Box width="100%">
        <Typography variant="h5" color="#2B3445" fontWeight="bold" mb={2}>
          Change Password
        </Typography>
        <TextField
          label="Current Password"
          value={currentPassword}
          variant="outlined"
          color="warning"
          type="password"
          autoFocus
          onChange={(e) => setCurrentPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="New Password"
          value={newPassword}
          variant="outlined"
          color="warning"
          type="password"
          fullWidth
          sx={{ mt: 3 }}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="info"
          fullWidth
          sx={{ mt: 3 }}
          disabled={currentPassword === "" || newPassword === ""}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Box>
    </Stack>
  );
};

export default Account;
