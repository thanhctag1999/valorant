import Sidebar from "./Sidebar/Sidebar";
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
