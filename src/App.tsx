import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import News from "./Page/News/News";
import Country from "./Page/Category/Category";
import NewsCategory from "./Page/News/NewsCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:news" element={<News />} />
        <Route path="/:news/:category" element={<NewsCategory />} />
        <Route path="/category/:category" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
