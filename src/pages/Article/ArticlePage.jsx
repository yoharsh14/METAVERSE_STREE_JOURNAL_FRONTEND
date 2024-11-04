import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
const ArticlePage = () => {
  const articles = useSelector((state) => state.article.data);
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const mobileView = false;
  useEffect(() => {
    setArticle(articles ? articles.filter((el) => el._id == id) : null);
  }, []);
  console.log(article);
  return (
    <div className="pb-10">
      {article ? (
        <div
          className={`${
            mobileView ? "px-5" : "px-40"
          } flex flex-col justify-start items-center`}
        >
          <h1 className="text-center text-5xl font-black">
            {article[0].title}
          </h1>
          <div className="py-10">
            <img src={`${article[0].featuredImage.imageURL}`} alt="" />
          </div>
          <div>{parse(article[0].body)}</div>
          <div className="pt-2">
            You be the Arbiter of Truth the readers of
            <a
              href="https://metaversestreetjournal.com/"
              className="text-blue-800"
            >
              {" "}
              The Metaverse Street Journal
            </a>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ArticlePage;
