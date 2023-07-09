import React from "react";
import { Link } from "react-router-dom";

const CountryNews = () => {
  return (
    <div className="w-full justify-between items-center md:gap-0 lg:w-1/3 lg:flex-wrap px-2">
      <div className="mb-5">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
          Popular News
        </h5>
        <ul>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/news-country/ru"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-bl bg-purple-300"></span>
              Russian (ru)
              <p className="text-gray-500 ml-auto">35 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/news-country/us"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              USA (us)
              <p className="text-gray-500 ml-auto">42 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/news-country/au"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Australia (au)
              <p className="text-gray-500 ml-auto">31 articles</p>
            </Link>
          </li>
          <li className="px-1 py-4 border-y border-white hover:border-gray-200 hover-span">
            <Link
              to="/news-country/hu"
              className="flex items-center text-gray-600"
            >
              <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
              Hungary (hu)
              <p className="text-gray-500 ml-auto">34 articles</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-5">
        <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
          Subscribe
        </h5>
        <p className="text-gray-600 mb-4">Subcribe to our newsletter.</p>
        <input
          type="email"
          placeholder="your email address"
          className="text-gray-700 bg-gray-100 w-full p-2 border rounded-t hover:broder-gray-600"
        />
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default CountryNews;
