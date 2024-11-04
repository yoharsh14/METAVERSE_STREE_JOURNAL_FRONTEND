import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./Slice/ModeSlice";
import articleReducer from "./Slice/ArticleSlice";
import userReducer from "./Slice/UserSlice";
import mobileViewReducer from "./Slice/MobileSlice";
export const store = configureStore({
  reducer: {
    mode: modeReducer,
    article: articleReducer,
    user: userReducer,
    mobileView: mobileViewReducer,
  },
});
