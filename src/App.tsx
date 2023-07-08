import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import News from "./Page/News/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
