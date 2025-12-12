{
  /* <FontAwesomeIcon icon={faTableColumns} />; */
}
import {
  faGrip,
  faUsers,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import siteLogo from "../../assets/site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navStyles = ({ isActive }: any): string => {
  return `font-medium text-lg font-noto ${
    isActive ? "text-[#454545]" : "text-white"
  } flex items-center`;
};

const Sidebar = () => {
  return (
    <>
      <div className="w-70 bg-black h-screen pt-12 pl-15 fixed">
        <div>
          <img src={siteLogo} />
        </div>
        <div className="flex flex-col gap-10 mt-15">
          <NavLink to="/admin/dashboard" className={navStyles}>
            <FontAwesomeIcon icon={faGrip} className="text-2xl mr-3" />
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={navStyles}>
            <FontAwesomeIcon icon={faUsers} className="text-2xl mr-3" />
            Users
          </NavLink>
          <NavLink to="/admin/subscription" className={navStyles}>
            <FontAwesomeIcon icon={faLayerGroup} className="text-2xl mr-3" />
            Subscription
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
