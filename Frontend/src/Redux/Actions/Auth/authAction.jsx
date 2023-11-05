import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const localURL = "http://localhost:5110";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${localURL}/auth/register`, formData, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const sendOTP = createAsyncThunk(
  "otp/send-otp",
  async (inputData, { rejectWithValue }) => {
    const formData = { email: inputData };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${localURL}/otp/send-otp`, formData, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "otp/verify-otp",
  async (formData, { rejectWithValue }) => {
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${localURL}/otp/verify-otp`, formData, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const completeProfile = createAsyncThunk(
  "auth/complete-profile",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${localURL}/auth/complete-profile`, formData, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(`${localURL}/auth/login`, formData, config);
      console.log('====================================');
      console.log(response.data.token);
      console.log('====================================');
      return response.data.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
