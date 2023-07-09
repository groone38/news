import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { INews, IResponceNews } from "../../models/News";
import Loader from "../../Components/Loader/Loader";

const Country = () => {
  const [data, setData] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        await axios
          .get<IResponceNews>(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e3a7fd1804b549e3b18ad4cfeb4552e7`
          )
          .then((res) => setData(res.data.articles));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    responce();
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {data.map((item) => (
        <div className="px-2" key={item.title}>
          <Link to={`/${item.title}/${category}`} className="main-news">
            <div className="absolute left-0 top-0 w-full h-full bg-gray-700/50 z-10"></div>
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="absolute left-0 top-0 w-full h-full object-cover z-0"
              />
            )}
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 leading-tight">
                {item.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Country;
