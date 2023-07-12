import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import News from "./Page/News/News";
import NewsCategory from "./Page/News/NewsCategory";
import About from "./Page/About/About";
import Category from "./Page/Category/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:news" element={<News />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/category/:news/:category" element={<NewsCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
