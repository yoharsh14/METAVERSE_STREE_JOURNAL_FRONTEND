import { createSlice } from "@reduxjs/toolkit";

export const mobileViewSlice = createSlice({
  name: "mobileView",
  initialState: {
    mobileView: false,
  },
  reducers: {
    toggleView: (state, action) => {
      state.mobileView = action.payload;
    },
  },
});

export const { toggleView } = mobileViewSlice.actions;

export default mobileViewSlice.reducer;
