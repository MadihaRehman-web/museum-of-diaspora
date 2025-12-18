import { NavLink } from "react-router-dom";

type BreadCrumbProps = {
  label: string;
  path?: string;
};

type BreadCrumbItems = {
  items: BreadCrumbProps[];
};

const BreadCrumb: React.FC<BreadCrumbItems> = ({ items }) => {
  return (
    <div className="flex items-center gap-4 text-lg sm:text-xl leading-10 font-noto px-8 sm:px-25 py-5">
      {items.map((item, index) => (
        <div key={index}>
          {item.path ? (
            <>
              <NavLink
                to={item.path}
                className={`underline text-white font-bold pb-0`}
              >
                {item.label}
              </NavLink>
              <span className="text-[#9B9B9B] font-medium ml-5">&gt;</span>
            </>
          ) : (
            <p className="font-medium text-[#9B9B9B]">{item.label}</p>
          )}
        </div>
      ))}
    </div>
  );
};
export default BreadCrumb;
