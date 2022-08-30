import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    getCurrentUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
