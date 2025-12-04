import { NavLink } from "react-router-dom";
import siteLogo from "../assets/site-logo.svg";

const Header: React.FC = () => {
  return (
    <div className="bg-black flex justify-between items-center px-20 py-9">
      <div>
        <img src={siteLogo} alt="site-logo" />
      </div>
      <nav className="text-white flex gap-8 ">
        <NavLink to="#" className={() => `font-medium font-noto`}>
          Galleries
        </NavLink>
        <NavLink to="#" className={() => `font-medium font-noto`}>
          Documentaries
        </NavLink>
        <NavLink to="#" className={() => `font-medium font-noto`}>
          Membership
        </NavLink>
        <NavLink to="#" className={() => `font-medium font-noto`}>
          Blog
        </NavLink>
        <NavLink to="#" className={() => `font-medium font-noto`}>
          Support Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
