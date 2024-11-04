import React from "react";
import Card from "../../components/Cards/Card";
import { useSelector } from "react-redux";
import heroImage from "../../assets/heroImage.jpg";
const Home = () => {
  const articles = useSelector((state) => state.article.data);
  return (
    <div className={` px-5`}>
      <div className="text-center text-3xl mb-5 font-semibold">Todays News</div>
      <div className="mb-10">
        <img src={heroImage} alt="" width={1200} className="m-auto" />
        <p className="text-center text-2xl font-semibold">
          India Blockchain Summit
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        {articles ? (
          articles.map((el, index) => <Card key={index} el={el} />)
        ) : (
          <div></div>
        )}
      </div>c
    </div>
  );
};

export default Home;
