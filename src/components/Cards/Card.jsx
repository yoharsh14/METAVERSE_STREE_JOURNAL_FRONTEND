import React from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const Card = ({ darkMode, el,index }) => {
  const navigate = useNavigate();
  console.log(el);
  return (
    <>
      <div
        className={`sm:w-[22%] flex flex-col rounded-sm cursor-pointer mx-4 mb-2`}
        onClick={() => {
          navigate(`/full/${el._id}`);
        }}
      >
        <img
          src={el.featuredImage.imageURL}
          alt=""
          className="h-72 rounded-sm mb-2"
        />
        <div className={`flex flex-col justify-start`}>
          <div className="flex gap-2 text-red-700 font-medium text-sm">
            {el.categories.slice(0, 2).map((cat, index) => (
              <div key={index}>{cat.toUpperCase()}</div>
            ))}
          </div>
          <div className="text-xl font-bold">{el.title}</div>
          <div className="text-md font-thin">{el.highlight}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
