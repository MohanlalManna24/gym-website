import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
