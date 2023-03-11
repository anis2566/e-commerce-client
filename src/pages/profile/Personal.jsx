import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { updateAvatar, updateUser } from "../../features/auth";
import LoadingButton from "@mui/lab/LoadingButton";

const Personal = () => {
  const { name, email, photoUrl } = useSelector((store) => store.auth.userInfo);
  const { isSuccess, loading } = useSelector((store) => store.auth);

  const [file, setFile] = useState(null);
  const [value, setValue] = useState(name);

  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSave = () => {
    dispatch(updateUser({ name: value }));
  };

  const handleAvatar = () => {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(updateAvatar(formData));
  };
  // const { isSuccess } = useSelector((store) => store.auth);
  // const { photoUrl, loading } = useSelector((store) => store.auth.userInfo);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <Stack direction="column" width="100%">
      <Box display="flex" gap="10px">
        <Box
          width="120px"
          height="120px"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#ED6C02"
        >
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              style={{ width: "90%", height: "90%", borderRadius: "50%" }}
              alt="Avatar"
            />
          ) : photoUrl ? (
            <img
              src={photoUrl}
              style={{ width: "90%", height: "90%", borderRadius: "50%" }}
              alt="Avatar"
            />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
              style={{ width: "90%", height: "90%", borderRadius: "50%" }}
              alt="avatar"
            />
          )}
        </Box>
        {file ? (
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            endIcon={<SendIcon />}
            variant="contained"
            color="warning"
            type="submit"
            onClick={handleAvatar}
            sx={{ height: "40px", mt: 9 }}
          >
            Update
          </LoadingButton>
        ) : (
          <Button
            variant="contained"
            component="label"
            //   size="small"
            color="warning"
            sx={{ height: "40px", mt: 9 }}
          >
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => handleFileChange(e)}
            />
          </Button>
        )}
      </Box>
      <Box mt={5} width="100%">
        <TextField
          label="Name"
          value={value}
          variant="outlined"
          color="warning"
          onChange={(e) => setValue(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          variant="outlined"
          color="warning"
          disabled
          fullWidth
          sx={{ mt: 3 }}
          helperText="Email can't be changed"
        />
        <Button
          variant="contained"
          color="info"
          fullWidth
          sx={{ mt: 3 }}
          disabled={value === name}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </Stack>
  );
};

export default Personal;
