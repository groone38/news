import React, { useEffect } from "react";
import { INews } from "../../models/News";
import MainNews from "../../Components/MainNews/MainNews";
import NewsList from "../../Components/NewsList/NewsList";
import { useAppDispatch, useAppSelector } from "../../store/state";
import { fetchMainNews } from "../../store/slice/newsSlice";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const state: INews[] = useAppSelector((state) => state.news.mainNews);
  const lodaing: boolean = useAppSelector((state) => state.news.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainNews());
  }, []);

  return (
    <>
      <MainNews firstNews={state[0]} secondNews={state[1]} />
      {lodaing ? <Loader /> : <NewsList data={state} />}
    </>
  );
};

export default Home;
