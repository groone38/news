import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
