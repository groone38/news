import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../store/state";
import { fetchNewsCategory } from "../../store/slice/newsSlice";

const NewsCategory = () => {
  const state = useAppSelector((state) => state.news.news);
  const loading = useAppSelector((state) => state.news.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { news, category } = useParams();
  useEffect(() => {
    const search = {
      news,
      category,
    };
    dispatch(fetchNewsCategory(search));
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="px-2">
          <div>
            <img src={state?.urlToImage} alt={state?.title} />
            <div className="mb-2 md:mb-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 leading-tight">
                {state?.title ? state?.title : "News without title!"}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <strong>Author: </strong>
                <span className="underline decoration-solid text-gray-400">
                  {state?.author ? state?.author : "News without author!"}
                </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <strong className="mr-1">Source: </strong>
                <a
                  href={state?.url}
                  target="_blank"
                  className="underline decoration-solid text-gray-400 mr-4"
                >
                  {state?.source.name
                    ? state?.source.name
                    : "News without source!"}
                </a>

                <strong className="mr-1">Date: </strong>
                <span className="underline decoration-solid text-gray-400">
                  {new Date(state?.publishedAt as string).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4">
              <button onClick={() => navigate(-1)} className="header-btn">
                Go back
              </button>
              <Link to={"/"} className="header-btn">
                Go Home
              </Link>
            </div>
          </div>
          <div className="my-4 text-gray-400 py-4 border-y border-gray-200">
            <span>
              {state?.description
                ? state?.description
                : "News without description!"}
            </span>
          </div>
          <div>
            <p className="font-inter">
              {state?.content ? state?.content : "News without content!"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCategory;
