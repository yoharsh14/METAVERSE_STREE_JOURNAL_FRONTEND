import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { fetchArticles } from "../redux/thunk/ArticleThunk";
import { useSelector, useDispatch } from "react-redux";
import { DeviceDetector } from "../utils/DeviceDetector";
import Categories from "../components/Navbar/Categories";
import { toggleView } from "../redux/Slice/MobileSlice";
const SharedLayout = () => {
  const isLoading = useSelector((state) => state.article.isLoading);
  const articles = useSelector((state) => state.article.data);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const DeviceDetector = () => {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
    if (hasTouchScreen) {
      dispatch(toggleView(true));
    } else {
      dispatch(toggleView(false));
    }
  };
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    DeviceDetector();
    if (!articles && counter < 2) {
      dispatch(fetchArticles());
      setCounter(counter + 1);
    }
  });
  return (
    <div>
      <Navbar isMobile={isMobile} />
      {/* <div className="h-36"></div> */}
      {isMobile ? (
        <div className="fixed bottom-10 bg-white text-[3svw] w-full">
          <Categories />
        </div>
      ) : null}
      <div className={`${isMobile ? "mt-5" : "mt-10"} mb-10`}>
        {isLoading ? <div>isLoading</div> : null}
        <Outlet />
      </div>
      <Footer isMobile={isMobile} />
    </div>
  );
};

export default SharedLayout;
