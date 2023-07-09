import React, { useEffect, useRef } from "react";

interface IPagination {
  newsPerPage: number;
  totalNews: number;
  setCurrentPage: (num: number) => void;
  currentPage: number;
  lastNewsPage: number;
}

const Pagination = ({
  newsPerPage,
  totalNews,
  setCurrentPage,
  currentPage,
  lastNewsPage,
}: IPagination) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pages.push(i);
  }

  const goBack = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage === lastNewsPage) {
      setCurrentPage(lastNewsPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-20 mb-10">
      <ul className="flex justify-center">
        <li
          className="pagination-item rounded-l-lg cursor-pointer"
          onClick={goBack}
        >
          Back
        </li>
        {pages.map((item) => (
          <li
            key={item}
            className={
              "pagination-item cursor-pointer " +
              (item === currentPage ? "bg-indigo-600 text-white" : "")
            }
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </li>
        ))}
        <li
          className="pagination-item rounded-r-lg cursor-pointer"
          onClick={goNext}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
