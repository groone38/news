import React, { useState } from "react";
import { INews } from "../../models/News";
import NewsCart from "./NewsCart";
import Pagination from "../Pagination/Pagination";
import CountryNews from "../CountryNews/CountryNews";

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
      <CountryNews />
    </main>
  );
};

export default NewsList;
