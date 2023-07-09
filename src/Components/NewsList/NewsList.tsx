import React, { useState } from "react";
import { INews } from "../../models/News";
import NewsCart from "./NewsCart";
import Pagination from "../Pagination/Pagination";
import CountryNews from "../CategoryNews/CategoryNews";

interface INewsList {
  data: INews[];
}

const NewsList = ({ data }: INewsList) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsPerPage, setNewsPerPage] = useState(4);
  const lastNewsPage = currentPage * newsPerPage;
  //   console.log("lastNewsPage", lastNewsPage);
  const firstNewsPage = lastNewsPage - newsPerPage;
  //   console.log("firstNewsPage", firstNewsPage);
  const currentCountry = data.slice(firstNewsPage, lastNewsPage);

  return (
    <main className="lg:flex">
      <div className="w-full lg:w-2/3">
        <section className="px-2 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-4">
          {currentCountry.map((item) => (
            <NewsCart
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={40}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastNewsPage={lastNewsPage}
        />
      </div>
      <CountryNews />
    </main>
  );
};

export default NewsList;
