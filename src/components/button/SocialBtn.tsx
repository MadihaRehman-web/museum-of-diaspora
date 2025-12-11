import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialBtnType = {
  iconName: any;
  label: string;
  color: string;
};

const SocialBtn: React.FC<SocialBtnType> = ({ iconName, label, color }) => {
  return (
    <button
      className={`${color} text-white min-w-37 py-2 font-noto font-semibold leading-6 cursor-pointer`}
    >
      <FontAwesomeIcon icon={iconName} />
      {label}
    </button>
  );
};
export default SocialBtn;
