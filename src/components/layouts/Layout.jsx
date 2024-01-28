import Sidebar from "./sidebar/sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <>{children}</>
    </div>
  );
};

export default Layout;
