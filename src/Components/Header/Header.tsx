import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header className="h-14 px-2 border-b flex items-center justify-between mb-4">
        <Link
          to="/"
          className="uppercase font-bold text-purple-800"
          onClick={() => setOpen(false)}
        >
          News
        </Link>
        <nav className="hidden md:flex items-center gap-3">
          <ul className="inline-flex items-center">
            <li>
              <Link to={"/"} className="header-link">
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
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/about" className="header-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
