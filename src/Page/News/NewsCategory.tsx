import React, { useEffect, useState } from "react";
import { INews, IResponceNews } from "../../models/News";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const NewsCategory = () => {
  const [data, setData] = useState<INews>();
  const [loading, setLoading] = useState<boolean>(false);
  const { news, category } = useParams();
  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        await axios
          .get<IResponceNews>(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e3a7fd1804b549e3b18ad4cfeb4552e7`
          )
          .then((res) => {
            res.data.articles.find((item: INews) => {
              if (item.title === news) {
                setData(item);
              }
            });
          });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    responce();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="px-2">
          <div>
            <img src={data?.urlToImage} alt={data?.title} />
            <div className="mb-2 md:mb-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 leading-tight">
                {data?.title ? data?.title : "News without title!"}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <strong>Author: </strong>
                <span className="underline decoration-solid text-gray-400">
                  {data?.author ? data?.author : "News without author!"}
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <strong className="mr-1">Source: </strong>
                <a
                  href={data?.url}
                  target="_blank"
                  className="underline decoration-solid text-gray-400 mr-4"
                >
                  {data?.source.name
                    ? data?.source.name
                    : "News without source!"}
                </a>

                <strong className="mr-1">Date: </strong>
                <span className="underline decoration-solid text-gray-400">
                  {new Date(data?.publishedAt as string).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <div className="my-4 text-gray-400 py-4 border-y border-gray-200">
            <span>
              {data?.description
                ? data?.description
                : "News without description!"}
            </span>
          </div>
          <div>
            <p className="font-inter">
              {data?.content ? data?.content : "News without content!"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCategory;
