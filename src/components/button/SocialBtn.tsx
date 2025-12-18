import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialBtnType = {
  iconName: any;
  label: string;
  color: string;
};

const SocialBtn: React.FC<SocialBtnType> = ({ iconName, label, color }) => {
  return (
    <Link
      className={`${color} text-white min-w-37 py-2 font-noto font-semibold leading-6 cursor-pointer flex justify-center items-center`}
      to="/social-signup"
    >
      <FontAwesomeIcon icon={iconName} />
      {label}
    </Link>
  );
};
export default SocialBtn;
