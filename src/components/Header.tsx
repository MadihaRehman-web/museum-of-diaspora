import { useState } from "react";
import { NavLink } from "react-router-dom";
import siteLogo from "../assets/site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

let styles = ({ isActive }: any): string =>
  `font-medium font-noto max-w-max ${
    isActive ? "border-b border-[#B8860B]" : "border-0"
  } `;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-black flex justify-between items-center px-10 lg:px-40 py-9 fixed z-1 w-full h-(--header-height)">
      <div>
        <img src={siteLogo} alt="site-logo" />
      </div>
      <nav className="text-white md:flex hidden gap-8">
        <NavLink to="/galleries" className={styles}>
          Galleries
        </NavLink>
        <NavLink to="/documentation" className={styles}>
          Documentaries
        </NavLink>
        <NavLink to="/membership" className={styles}>
          Membership
        </NavLink>
        <NavLink to="/blog" className={styles}>
          Blog
        </NavLink>
        <NavLink to="/supportus" className={styles}>
          Support Us
        </NavLink>
      </nav>

      {/* Hamburger  */}
      <button
        className="text-white text-3xl cursor-pointer md:hidden"
        onClick={toggleHamburger}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      <nav
        className={`text-white gap-8 ${
          isOpen ? "flex" : "hidden"
        } flex-col absolute left-0 top-(--header-height) bg-black w-full pl-10 pb-10`}
      >
        <NavLink
          to="/galleries"
          className={styles}
          onClick={() => setIsOpen(false)}
        >
          Galleries
        </NavLink>
        <NavLink
          to="/documentation"
          className={styles}
          onClick={() => setIsOpen(false)}
        >
          Documentaries
        </NavLink>
        <NavLink
          to="/membership"
          className={styles}
          onClick={() => setIsOpen(false)}
        >
          Membership
        </NavLink>
        <NavLink to="/blog" className={styles} onClick={() => setIsOpen(false)}>
          Blog
        </NavLink>
        <NavLink
          to="/supportus"
          className={styles}
          onClick={() => setIsOpen(false)}
        >
          Support Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
