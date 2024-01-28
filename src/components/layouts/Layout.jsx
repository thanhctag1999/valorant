import "./Layout.scss";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <>{children}</>
    </div>
  );
};

export default Layout;
