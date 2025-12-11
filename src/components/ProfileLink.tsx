import { NavLink } from "react-router-dom";

const handleStyles = ({ isActive }: any) => {
  return `${
    isActive
      ? "text-white font-bold border-l-4 brder-white "
      : "text-[#929292] font-normal"
  } text-xl leading-10 font-noto my-2 pl-5`;
};

const ProfileLink = () => {
  return (
    <div className="flex flex-col">
      <NavLink to="/profile" className={handleStyles}>
        My Profile
      </NavLink>
      <NavLink to="/change/reset-password" className={handleStyles}>
        Password
      </NavLink>
      <NavLink to="/curator" className={handleStyles}>
        Curator
      </NavLink>
    </div>
  );
};
export default ProfileLink;
