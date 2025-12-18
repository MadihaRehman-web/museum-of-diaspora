import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <ScrollToTop />
      <div className="lg:pl-[260px] xl:pl-[260px] xl:pr-[360px]">
        <Outlet />
      </div>
      <ProfileSidebar />
    </>
  );
};
export default AdminLayout;
