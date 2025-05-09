import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import ScrollToTop from "../shared/ScrollToTop";
import Navber from "../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden scroll-smooth">
      <ScrollToTop />
      {/* navigetions area */}
      <div className="">
        <Navber />
      </div>
      {/* Main content area*/}
      <div className="flex-grow ">
        <Outlet />
      </div>
      {/* footer area */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
