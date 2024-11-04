import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk("fetchArticles", async () => {
  const allArticleAPI = import.meta.env.VITE_BASE_URL + "/article/all";
  const res = await fetch(allArticleAPI);
  return res.json();
});
