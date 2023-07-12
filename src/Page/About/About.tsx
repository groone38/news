import React from "react";
import photo from "../../assets/images/photo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:flex md:gap-4">
      <a
        href="https://protfolio-snowy.vercel.app/"
        target="_blank"
        className="w-1/3 duration-300 ease-in-out rounded hover:shadow-xl shadow-gray-800 hover:scale-95"
      >
        <img src={photo} alt="My" />
      </a>
      <div className="border rounded p-4 border-purple-800 flex flex-col justify-between">
        <i className="text-start uppercase text-2xl">About</i>
        <p>
          Hi!
          <br /> I'm Andrey, from Russia. This my News cite. In future, i'm
          going to develop this cite. Maybe add back-end, and buy busines
          subscription
          <br />
          This project I use{" "}
          <a href="https://newsapi.org" target="_blank" className="header-link">
            https://newsapi.org
          </a>{" "}
          for get News request. But, I use free version (Developer) where gift
          500 request in day, that's why cite can be crush ((((
          <br />
          Some{" "}
          <Link to="/" className="header-link">
            news
          </Link>{" "}
          can not displayed, because blocked in my country
        </p>
        <i className="text-end">
          P.S. <br />
          Sorry for my English
        </i>
      </div>
    </div>
  );
};

export default About;
