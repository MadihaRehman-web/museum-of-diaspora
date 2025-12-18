import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="bg-[#121418]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
