import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName, link }: any) => {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className="h-10 w-10 bg-black border-2 border-white/25 rounded-[50%] cursor-pointer hover:border-white/60 text-white flex items-center justify-center"
      >
        <FontAwesomeIcon icon={iconName} />
      </Link>
    </>
  );
};
export default Icon;
