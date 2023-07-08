import React, { useEffect, useState } from "react";
import imgTwo from "../../assets/images/img-2.jpg";
import axios from "axios";
import { INews, IResponceNews } from "../../models/News";
import { Link } from "react-router-dom";
import MainNews from "../../Components/MainNews/MainNews";
import NewsList from "../../Components/NewsList/NewsList";

const Home = () => {
  const [data, setData] = useState<INews[]>([]);
  useEffect(() => {
    const responce = async () => {
      try {
        await axios
          .get<IResponceNews>(
            "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e3a7fd1804b549e3b18ad4cfeb4552e7"
          )
          .then((res) => {
            setData(res.data.articles);
          });
      } catch (error) {
        console.log(error);
      }
    };
    responce();
  }, []);

  return (
    <>
      <MainNews firstNews={data[0]} secondNews={data[1]} />
      <NewsList data={data} />
    </>
  );
};

export default Home;
