import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  isSuccess: false,
  isLoggedIn: localStorage.getItem("currentUser") ? true : false,
  userInfo: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : {},
};

// create user
export const createUser = createAsyncThunk(
  "createUser",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/create`,
        values
      );
      toast.success("Registration Successful", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return rejectWithValue(error.response.data.message);
    }
  }
);

// login user
export const loginUser = createAsyncThunk(
  "loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        values
      );
      toast.success("Login Successful", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return rejectWithValue(error.response.data.message);
    }
  }
);

// update user
export const updateUser = createAsyncThunk(
  "updateUser",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/user/update`,
        values
      );
      toast.info("Profile Updated", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      console.log(res);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return rejectWithValue(error.response.data.message);
    }
  }
);

// change password
export const changePassword = createAsyncThunk(
  "changePassword",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/auth/change-password`,
        values
      );
      toast.info("Password Changed", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return rejectWithValue(error.response.data.message);
    }
  }
);

// change password
export const logoutUser = createAsyncThunk(
  "logout",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/auth/logout`
      );
      toast.info("Logout Successful", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      localStorage.removeItem("currentUser");
      return res.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return rejectWithValue(error.response.data.message);
    }
  }
);

// update avatar
export const updateAvatar = createAsyncThunk(
  "updateAvatar",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/user/update/avatar`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.info("Photo Updated", {
        autoClose: 1500,
        pauseOnHover: false,
      });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1500,
        pauseOnHover: false,
      });
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(updateAvatar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAvatar.fulfilled, (state) => {
      state.isSuccess = true;
      state.loading = false;
    });
    builder.addCase(updateAvatar.rejected, (state) => {
      state.isSuccess = true;
      state.loading = false;
    });
  },
});

export default authSlice;
