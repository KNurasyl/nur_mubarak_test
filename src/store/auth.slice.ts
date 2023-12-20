import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConnector } from "../integrations/api.connector";
import { TUser } from "../types/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (data: TUser): Promise<any> => {
    try {
        return await apiConnector.register(data);
    } catch (e: any) {
      throw new Error(e);
    };
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({userName, password}: {userName: string, password: string}): Promise<any> => {
    try {
        return await apiConnector.login({userName, password});
    } catch (e: any) {
      throw new Error(e);
    };
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as null | {},
    isLoading: false,
    loginError: false,
    isUserAuth: true
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
        .addCase(
            register.pending, state => {
                state.loginError = false;
                state.isUserAuth = false;
                state.isLoading = true;
            }
        )
        .addCase(
            register.rejected, state => {
                state.loginError = true;
                state.isUserAuth = false;
                state.isLoading = false;
            }
        )
        .addCase(
            register.fulfilled, (state, action) => {
                state.loginError = false;
                state.isLoading = false;
                state.isUserAuth = true;
                state.user = action.payload;
            }
        )
        .addCase(
            login.pending, state => {
                state.loginError = false;
                state.isUserAuth = false;
                state.isLoading = true;
            }
        )
        .addCase(
            login.rejected, state => {
                state.loginError = true;
                state.isUserAuth = false;
                state.isLoading = false;
            }
        )
        .addCase(
            login.fulfilled, (state, action) => {
                state.loginError = false;
                state.isLoading = false;
                state.isUserAuth = true;
                state.user = action.payload;
            }
        )
  },
});
