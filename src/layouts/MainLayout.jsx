import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
