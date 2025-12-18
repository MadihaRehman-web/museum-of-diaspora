type dropDownType = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  optionList: string[];
};
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectOption: React.FC<dropDownType> = ({
  id,
  name,
  label,
  required = true,
  optionList,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col my-4">
      <label
        htmlFor={id}
        className="text-[#CACACA] font-semibold text-base leading-6 font-noto my-1"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          name={name}
          id={id}
          className="bg-[#191B20] text-[#CACACA] border border-[#454545] outline-0 py-2 pl-4 pr-8 appearance-none font-noto w-full cursor-pointer"
        >
          {defaultValue && <option hidden>{defaultValue}</option>}
          {optionList.map((value: string) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
        <span className="absolute text-[#CACACA] right-5 top-2 pointer-events-none">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
    </div>
  );
};
export default SelectOption;
