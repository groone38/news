import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-10 px-2">
      <div className="flex">
        <div className="mb-5 w-full">
          <h6 className="font-semibold text-gray-700 mb-4">World News!</h6>
          <ul className="flex gap-5 items-center">
            <li>
              <Link
                to="/about"
                className="inline-block text-gray-500 py-2 hover:text-gray-900"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 w-1/2">
          <h6 className="font-semibold text-gray-700 mb-4">Contact</h6>
          <ul className="flex gap-5 items-center">
            <li>
              <a
                href="mailto:akirasindzi@gmail.com"
                target="_blank"
                className="inline-block text-gray-500 py-2 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/lisichkinlove"
                target="_blank"
                className="inline-block text-gray-500 py-2 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
