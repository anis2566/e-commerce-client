import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

import logo from "../../assets/logo.png";
import FlexCenter from "../../components/FlexCenter";
import { createUser } from "../../features/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // formik state
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // validationSchema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().required("required").email("Invalid email"),
    password: Yup.string().required("required"),
  });

  // onSubmit
  const onSubmit = (values) => {
    dispatch(createUser(values));
    // toast.success("success");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Box>
        <FlexCenter mt={3}>
          <img src={logo} alt="Logo" style={{ height: "100px" }} />
        </FlexCenter>
        <Form>
          <FlexCenter mt={3}>
            <Card
              elevation={0}
              sx={{
                padding: "20px",
                border: "1px solid #DDDDDD",
                // display: "flex",
                // justifyContent: "start",
                width: "350px",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Create Account
              </Typography>
              <Field name="name">
                {({ form, field }) => (
                  <TextField
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth
                    sx={{ mt: 3 }}
                    {...field}
                    helperText={
                      form.touched.name && form.errors.name ? (
                        <span style={{ color: "red" }}>{form.errors.name}</span>
                      ) : null
                    }
                  />
                )}
              </Field>
              <Field name="email">
                {({ form, field }) => (
                  <TextField
                    label="Email"
                    size="small"
                    fullWidth
                    sx={{ mt: 3 }}
                    {...field}
                    helperText={
                      form.touched.email && form.errors.email ? (
                        <span style={{ color: "red" }}>
                          {form.errors.email}
                        </span>
                      ) : null
                    }
                  />
                )}
              </Field>
              <Field name="password">
                {({ form, field }) => (
                  <TextField
                    label="Password"
                    size="small"
                    fullWidth
                    sx={{ my: 3 }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    {...field}
                    helperText={
                      form.touched.password && form.errors.password ? (
                        <span style={{ color: "red" }}>
                          {form.errors.password}
                        </span>
                      ) : null
                    }
                  />
                )}
              </Field>
              <LoadingButton
                loading={false}
                loadingPosition="end"
                endIcon={<SendIcon />}
                variant="contained"
                fullWidth
                color="warning"
                type="submit"
              >
                Register
              </LoadingButton>
              <Typography variant="body2" sx={{ mt: 2 }}>
                By creating an account, you agree to our{" "}
                <Button
                  type="text"
                  LinkComponent={Link}
                  to="/terms-conditions"
                  size="small"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Conditions of Use
                </Button>
                and
                <Button
                  type="text"
                  LinkComponent={Link}
                  to="/terms-conditions"
                  size="small"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Privacy Notice.
                </Button>
              </Typography>
              <Divider sx={{ marginTop: "5px" }} />
              <Typography variant="body1" sx={{ mt: 1 }}>
                Already have an account?
                <Button
                  type="text"
                  LinkComponent={Link}
                  to="/login"
                  size="small"
                  color="primary"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Login
                </Button>
              </Typography>
            </Card>
          </FlexCenter>
        </Form>
      </Box>
    </Formik>
  );
};

export default Register;
