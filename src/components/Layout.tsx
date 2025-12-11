import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="pt-(--header-height) bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
