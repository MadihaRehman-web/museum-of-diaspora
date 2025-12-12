import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="pl-(--sidebar-width) pr-(--profileSidebar-width)">
        <Outlet />
      </div>
      <ProfileSidebar />
    </>
  );
};
export default AdminLayout;
