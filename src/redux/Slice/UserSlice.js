import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../thunk/AuthThunk";
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    // builder
    //   .addCase(register.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(register.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.data = action.payload;
    //   })
    //   .addCase(register.rejected, (state, action) => {
    //     console.log("Error", action.payload);
    //     state.isError = true;
    //     state.isLoading = false;
    //   });
  },
});

export default userSlice.reducer;
