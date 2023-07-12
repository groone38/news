import React from "react";
import { Link } from "react-router-dom";

interface IBurgerMenu {
  open: boolean;
  setOpen: (a: boolean) => void;
}

const BurgerMenu = ({ open, setOpen }: IBurgerMenu) => {
  return (
    <div
      className={
        "absolute z-20 duration-300 ease-in-out bg-white h-0 w-full overflow-hidden top-[7%] " +
        (open && " h-36 overflow-y-hidden")
      }
    >
      <nav className="flex flex-col items-center gap-3">
        <ul className="flex flex-col items-center">
          <li>
            <Link
              to={"/"}
              className="header-link"
              onClick={() => setOpen(false)}
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
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="header-link"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
