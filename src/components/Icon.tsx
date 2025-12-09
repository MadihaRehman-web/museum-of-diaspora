import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName }: any) => {
  return (
    <FontAwesomeIcon
      icon={iconName}
      className="bg-black border-2 border-white/25 rounded-[50%] text-white p-2 cursor-pointer hover:border-white/60"
    />
  );
};
export default Icon;
