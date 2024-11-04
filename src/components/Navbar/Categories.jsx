import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Categories = () => {
  // const dispatch = useDispatch();
  const mobileView = useSelector((state) => state.mobileView.mobileView);
  const navigate = useNavigate();
  return (
    <div className={`flex items-center font-light bg-slate-200 border-b-2`}>
      <div className="flex w-full items-center justify-center gap-3 p-2 font-medium">
        <button
          className="cursor-pointer hover:text-slate-600 hover:scale-105 px-2"
          onClick={() => navigate("category/sandbox")}
        >
          SANDBOX
        </button>
        <div
          className="cursor-pointer hover:text-slate-600 hover:scale-105"
          onClick={() => navigate("category/upland")}
        >
          UPLAND
        </div>
        <div
          className="cursor-pointer hover:text-slate-600 hover:scale-105"
          onClick={() => navigate("category/web3")}
        >
          WEB3
        </div>
        <div
          className="cursor-pointer hover:text-slate-600 hover:scale-105"
          onClick={() => navigate("category/metaverse")}
        >
          METAVERSE
        </div>
        <div
          className="cursor-pointer hover:text-slate-600 hover:scale-105"
          onClick={() => navigate("category/startup")}
        >
          STARTUP
        </div>
        <div
          className="cursor-pointer hover:text-slate-600 hover:scale-105"
          onClick={() => navigate("category/staff")}
        >
          STAFF
        </div>
      </div>
      {/* <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            defaultValue
            className="sr-only peer"
            checked={darkMode}
            onChange={() => dispatch(toggleMode())}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 rounded-full  dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-slate-600 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black" />
          <span className="ms-3 text-sm font-medium text-black dark:text-gray-300">
            {darkMode ? "Dark" : "Light"}
          </span>
        </label>
      </div> */}
    </div>
  );
};

export default Categories;
