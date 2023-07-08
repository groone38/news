import React, { useState } from "react";
import { INews } from "../../models/News";
import NewsCart from "./NewsCart";
import Pagination from "../Pagination/Pagination";

interface INewsList {
  data: INews[];
}

const NewsList = ({ data }: INewsList) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage, setNewsPerPage] = useState(2);
  const lastNewsPage = currentPage * newsPerPage;
  console.log("lastNewsPage", lastNewsPage);
  const firstNewsPage = lastNewsPage - newsPerPage;
  console.log("firstNewsPage", firstNewsPage);
  const currentCountry = data.slice(firstNewsPage, lastNewsPage);
  return (
    <main className="lg:flex">
      <div className="w-full lg:w-2/3">
        <section className="px-2 lg:flex">
          <NewsCart />
          <NewsCart />
        </section>
        <Pagination newsPerPage={newsPerPage} totalNews={40} />
      </div>
      <div className="w-full justify-between items-center md:gap-0 lg:w-1/3 lg:flex-wrap px-2">
        <div className="mb-5">
          <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
            Popular News
          </h5>
          <ul>
            <li className="px-1 py-4 border-y border-white hover:border-gray-200">
              <a href="#!" className="flex items-center text-gray-600">
                <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-bl from-green-500 to-green-700"></span>
                Russian
                <span className="text-gray-500 ml-auto">23 articles</span>
              </a>
            </li>
            <li className="px-1 py-4 border-y border-white hover:border-gray-200">
              <a href="#!" className="flex items-center text-gray-600">
                <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
                UK
                <span className="text-gray-500 ml-auto">23 articles</span>
              </a>
            </li>
            <li className="px-1 py-4 border-y border-white hover:border-gray-200">
              <a href="#!" className="flex items-center text-gray-600">
                <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
                USA
                <span className="text-gray-500 ml-auto">23 articles</span>
              </a>
            </li>
            <li className="px-1 py-4 border-y border-white hover:border-gray-200">
              <a href="#!" className="flex items-center text-gray-600">
                <span className="inline-block w-4 h-4 mr-3 bg-purple-300"></span>
                Ukrain
                <span className="text-gray-500 ml-auto">23 articles</span>
              </a>
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
    </main>
  );
};

export default NewsList;
