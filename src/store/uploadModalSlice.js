import { createSlice } from "@reduxjs/toolkit";

const UplodaImageSlice = createSlice({
  name: "uploadImage",
  initialState: {
    showModal: false,
    curImage: "",
  },
  reducers: {
    showImageModal(state, action) {
      state.showModal = true;
    },
    hideImageModal(state) {
      state.showModal = false;
    },
    getImage(state, action) {
      state.curImage = action.payload;
    },
  },
});

export const uploadActions = UplodaImageSlice.actions;
export default UplodaImageSlice;
