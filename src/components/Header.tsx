import { NavLink } from "react-router-dom";
import siteLogo from "../assets/site-logo.svg";

let styles = ({ isActive }: any): string =>
  `font-medium font-noto ${
    isActive ? "border-b border-[#B8860B]" : "border-0"
  } `;

const Header: React.FC = () => {
  return (
    <div className="bg-black flex justify-between items-center px-20 py-9 fixed z-1 w-full h-(--header-height)">
      <div>
        <img src={siteLogo} alt="site-logo" />
      </div>
      <nav className="text-white flex gap-8 ">
        <NavLink to="/home/galleries" className={styles}>
          Galleries
        </NavLink>
        <NavLink to="/home/documentation" className={styles}>
          Documentaries
        </NavLink>
        <NavLink to="/home/membership" className={styles}>
          Membership
        </NavLink>
        <NavLink to="/home/blog" className={styles}>
          Blog
        </NavLink>
        <NavLink to="/home/supportus" className={styles}>
          Support Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
