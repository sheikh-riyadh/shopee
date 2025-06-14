import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <div>
        <Outlet />
      </div>
      <div></div>
    </div>
  );
};

export default MainLayout;
