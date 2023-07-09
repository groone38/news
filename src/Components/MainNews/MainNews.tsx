import React from "react";
import { INews } from "../../models/News";
import { Link } from "react-router-dom";

interface IMainNews {
  firstNews: INews;
  secondNews: INews;
}

const MainNews = ({ firstNews, secondNews }: IMainNews) => {
  return (
    <section className="px-2 lg:flex gap-3">
      <Link
        to={`/${firstNews?.title}`}
        className="main-news lg:w-2/3 bg-gradient-to-tr from-red-500 via-purple-500 hover:to-green-500/50 to-blue-500 "
      >
        <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
        <img
          src={firstNews?.urlToImage}
          alt={firstNews?.urlToImage}
          className="absolute left-0 top-0 w-full h-full object-cover z-0"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
            {firstNews?.title}
          </h2>
        </div>
      </Link>
      <Link
        to={`/${secondNews?.title}`}
        className="main-news lg:w-1/3 bg-violet-300"
      >
        <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
        <img
          src={secondNews?.urlToImage}
          alt={secondNews?.urlToImage}
          className="absolute left-0 top-0 w-full h-full object-cover z-0"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
            {secondNews?.title}
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default MainNews;
