import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-[260px] xl:pl-[260px] xl:pr-[360px]">
        <Outlet />
      </div>
      <ProfileSidebar />
    </>
  );
};
export default AdminLayout;
