import React, { useState } from "react";
import { INews } from "../../models/News";
import NewsCart from "./NewsCart";
import Pagination from "../Pagination/Pagination";
import CategoryNews from "../CategoryNews/CategoryNews";

interface INewsList {
  data: INews[];
}

const NewsList = ({ data }: INewsList) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage, setNewsPerPage] = useState(4);
  const lastNewsPage = currentPage * newsPerPage;

  const firstNewsPage = lastNewsPage - newsPerPage;
  //   console.log("firstNewsPage", firstNewsPage);
  const currentNews = data.slice(firstNewsPage, lastNewsPage);
  return (
    <main className="lg:flex">
      <div className="w-full lg:w-2/3">
        <section className="px-2 lg:h-[600px] lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-4">
          {currentNews.map((item) => (
            <NewsCart
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={data.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <CategoryNews />
    </main>
  );
};

export default NewsList;
