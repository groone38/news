import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../store/state";
import { fetchCategory } from "../../store/slice/newsSlice";

const Category = () => {
  const state = useAppSelector((state) => state.news.newsCategory);
  const loading = useAppSelector((state) => state.news.loading);
  const dispatch = useAppDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchCategory(category!));
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {state.map((item) => (
        <div className="px-2" key={item.title}>
          <Link
            to={`/category/${item.title}/${category}`}
            className="main-news"
          >
            <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="absolute left-0 top-0 w-full h-full object-cover z-0"
              />
            )}
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
                {item.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Category;
