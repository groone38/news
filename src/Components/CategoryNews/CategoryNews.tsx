import React from "react";
import { Link } from "react-router-dom";
import Subscribing from "../Subscribing/Subscribing";

const CategoryNews = () => {
  return (
    <div className="w-full justify-between items-center md:gap-0 lg:w-1/3 lg:flex-wrap px-2">
      <div className="mb-5">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
          Popular News
        </h5>
        <ul>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/business"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-bl bg-purple-300"></span>
              Business
              <p className="text-gray-500 ml-auto">35 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/entertainment"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Entertainment
              <p className="text-gray-500 ml-auto">42 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/general"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              General
              <p className="text-gray-500 ml-auto">31 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/health"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Health
              <p className="text-gray-500 ml-auto">27 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/science"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Science
              <p className="text-gray-500 ml-auto">35 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/sports"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Sports
              <p className="text-gray-500 ml-auto">32 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/category/technology"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Technology
              <p className="text-gray-500 ml-auto">39 articles</p>
            </Link>
          </li>
        </ul>
      </div>
      <Subscribing />
    </div>
  );
};

export default CategoryNews;
