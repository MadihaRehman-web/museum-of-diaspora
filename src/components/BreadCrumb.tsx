import { NavLink } from "react-router-dom";

type PageType = {
  currentPage: string;
};

const BreadCrumb: React.FC<PageType> = ({ currentPage }) => {
  return (
    <div className="flex items-center gap-4 text-xl leading-10 font-noto px-25 py-5">
      <NavLink to={"/home"} className={`underline text-white font-bold pb-0`}>
        Home
      </NavLink>
      <span className="text-[#9B9B9B] font-medium">&gt;</span>
      <p className="font-medium text-[#9B9B9B]">{currentPage}</p>
    </div>
  );
};
export default BreadCrumb;
