import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login", async ({ credentials }) => {
  const loginAPI = import.meta.env.VITE_BASE_URL + "/auth/login";
  const data = await fetch(loginAPI, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (data.status != 200) {
    throw new Error("Error in login");
  }
  const res = await data.json();
  localStorage.setItem("user", JSON.stringify(res));
  return res;
});

export const register = createAsyncThunk("login", async ({ credentials }) => {
  const registerAPI = import.meta.env.VITE_BASE_URL + "/auth/register";
  const data = await fetch(registerAPI, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (data.status != 200) {
    throw new Error("Error in login");
  }
  return data.json();
});
