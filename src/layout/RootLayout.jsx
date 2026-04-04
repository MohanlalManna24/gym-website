import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
