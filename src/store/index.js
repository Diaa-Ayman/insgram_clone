import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import UplodaImageSlice from "./uploadModalSlice";
const store = configureStore({
  reducer: {
    uploadImage: UplodaImageSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export default store;
