import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { loginUser } from "../../features/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // formik state
  const initialValues = {
    email: "",
    password: "",
  };

  // validationSchema
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("required").email("Invalid email"),
    password: Yup.string().required("required"),
  });

  // onSubmit
  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  const { loading, isLoggedIn } = useSelector((store) => store.auth);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        window.location.href = "http://localhost:3000";
      }, 2000);
    }
  }, [isLoggedIn]);

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
                width: "350px",
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                Login
              </Typography>
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
                loading={isLoading}
                loadingPosition="end"
                endIcon={<SendIcon />}
                variant="contained"
                fullWidth
                color="warning"
                type="submit"
              >
                Login
              </LoadingButton>
              <Divider sx={{ marginTop: "5px" }} />
              <Typography variant="body1" sx={{ mt: 1 }}>
                Don't have an account?
                <Button
                  type="text"
                  LinkComponent={Link}
                  to="/register"
                  size="small"
                  color="primary"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Register
                </Button>
              </Typography>
              <Divider sx={{ margin: "10px 0" }} />
              <Typography variant="body1">
                Forgotten password?
                <Button
                  type="text"
                  LinkComponent={Link}
                  to="/reset-password"
                  size="small"
                  color="inherit"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Reset
                </Button>
              </Typography>
            </Card>
          </FlexCenter>
        </Form>
      </Box>
    </Formik>
  );
};

export default Login;
