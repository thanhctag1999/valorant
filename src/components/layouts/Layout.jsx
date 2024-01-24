import "./layout.scss";
import Sidebar from "./sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <>{children}</>
    </div>
  );
};

export default Layout;
