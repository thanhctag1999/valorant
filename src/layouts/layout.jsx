import { Outlet } from "react-router-dom";
import "./layout.scss";
import Sidebar from "./sidebar/sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
