import React, { useEffect, useState } from "react";
import imgTwo from "../../assets/images/img-2.jpg";
import axios from "axios";
import { INews, IResponceNews } from "../../models/News";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<INews[]>([]);
  useEffect(() => {
    const responce = async () => {
      try {
        await axios
          .get<IResponceNews>(
            "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e3a7fd1804b549e3b18ad4cfeb4552e7"
          )
          .then((res) => {
            setData(res.data.articles);
          });
      } catch (error) {
        console.log(error);
      }
    };
    responce();
  }, []);

  return (
    <>
      <section className="px-2 lg:flex gap-3">
        <Link
          to={`/${data[0]?.title}`}
          className="w-full lg:w-2/3 bg-gradient-to-tr from-red-500 via-purple-500 hover:to-green-500/50 to-blue-500 h-96 mb-4 relative rounded inline-block overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
          <img
            src={data[0]?.urlToImage}
            alt={data[0]?.urlToImage}
            className="absolute left-0 top-0 w-full h-full object-cover z-0"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
              {data[0]?.title}
            </h2>
          </div>
        </Link>
        <Link
          to={`/${data[1]?.title}`}
          className="w-full lg:w-1/3 bg-violet-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
          <img
            src={data[1]?.urlToImage}
            alt={data[1]?.urlToImage}
            className="absolute left-0 top-0 w-full h-full object-cover z-0"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
              {data[1]?.title}
            </h2>
          </div>
        </Link>
      </section>
      <main className="lg:flex">
        <div className="w-full lg:w-2/3">
          <section className="px-2 lg:flex">
            <a href="#!" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus, facere?
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur assumenda cupiditate aut porro blanditiis maiores
                    repellendus rerum temporibus consectetur corrupti?
                  </p>
                </div>
              </div>
            </a>
            <a href="#!" className="block mb-10">
              <div className="flex">
                <div>
                  <h3 className="mt-3 mb-2 text-gray-700 font-bold text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus, facere?
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur assumenda cupiditate aut porro blanditiis maiores
                    repellendus rerum temporibus consectetur corrupti?
                  </p>
                </div>
              </div>
            </a>
          </section>
          <div className="mt-20 mb-10">
            <ul className="flex justify-center">
              <li>
                <a href="#!" className="pagination-item rounded-l-lg">
                  Back
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item">
                  1
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item">
                  2
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item">
                  3
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item">
                  4
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item">
                  5
                </a>
              </li>
              <li>
                <a href="#!" className="pagination-item rounded-r-lg">
                  Next
                </a>
              </li>
            </ul>
          </div>
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
    </>
  );
};

export default Home;
