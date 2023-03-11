import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
