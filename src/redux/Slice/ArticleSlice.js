import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "../thunk/ArticleThunk";

const ArticleSlice = createSlice({
  name: "article",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default ArticleSlice.reducer;
