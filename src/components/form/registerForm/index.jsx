import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = ({ setValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  // toggle show password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // initials valuse
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // on submit
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Box mt={2} maxWidth="270px">
          <Field name="name">
            {({ form, field }) => (
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                color="warning"
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
                variant="outlined"
                label="Email"
                fullWidth
                color="warning"
                {...field}
                helperText={
                  form.touched.email && form.errors.email ? (
                    <span style={{ color: "red" }}>{form.errors.email}</span>
                  ) : null
                }
                sx={{ mt: 2 }}
              />
            )}
          </Field>
          <Field name="password">
            {({ form, field }) => (
              <TextField
                variant="outlined"
                label="Password"
                fullWidth
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showPassword ? "text" : "password"}
                color="warning"
                {...field}
                helperText={
                  form.touched.password && form.errors.password ? (
                    <span style={{ color: "red" }}>{form.errors.password}</span>
                  ) : null
                }
              />
            )}
          </Field>
          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
