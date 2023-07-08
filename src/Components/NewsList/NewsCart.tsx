import React from "react";
import { Link } from "react-router-dom";

interface INewsCart {
  title: string;
  content: string;
}

const NewsCart = ({ title, content }: INewsCart) => {
  return (
    <Link to={`/${title}`} className="block mb-10">
      <div className="flex">
        <div>
          <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2xl">
            {title}
          </h3>
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCart;
