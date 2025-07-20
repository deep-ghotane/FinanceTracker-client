import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Header />
      {/* page content */}
      <main className="main">
        <Outlet />
      </main>
      {/* footer content */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
