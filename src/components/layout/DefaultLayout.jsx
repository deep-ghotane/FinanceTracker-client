import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Header />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
