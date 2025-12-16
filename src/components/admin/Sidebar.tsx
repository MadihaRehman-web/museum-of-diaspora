import { useState } from "react";
import {
  faGrip,
  faUsers,
  faLayerGroup,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import siteLogo from "../../assets/site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navStyles = ({ isActive }: any) =>
  `font-medium text-base font-noto ${
    isActive ? "text-white" : "text-[#454545]"
  } flex items-center`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 text-white text-2xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
        />
      )}

      <div
        className={`
          bg-black fixed top-0 left-0 h-screen pt-12 pl-8 lg:pl-15 z-50 w-55 lg:w-65 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden absolute top-5 right-5 text-white text-2xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div>
          <img src={siteLogo} />
        </div>

        <div className="flex flex-col gap-10 mt-15">
          <NavLink to="/admin/dashboard" className={navStyles}>
            <FontAwesomeIcon icon={faGrip} className="text-xl mr-3" />
            Dashboard
          </NavLink>

          <NavLink to="/admin/users" className={navStyles}>
            <FontAwesomeIcon icon={faUsers} className="text-xl mr-3" />
            Users
          </NavLink>

          <NavLink to="/admin/subscription" className={navStyles}>
            <FontAwesomeIcon icon={faLayerGroup} className="text-xl mr-3" />
            Subscription
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
