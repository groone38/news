import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
