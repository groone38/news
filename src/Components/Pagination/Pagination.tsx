import React from "react";

type Props = {
  newsPerPage: any;
  totalNews: any;
};

const Pagination = ({ newsPerPage, totalNews }: Props) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pages.push(i);
  }
  return (
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
  );
};

export default Pagination;
