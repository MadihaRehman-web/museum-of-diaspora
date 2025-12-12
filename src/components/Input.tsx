type InputType = {
  label: string;
  id: string;
  type: string;
  required?: boolean;
};

const Input: React.FC<InputType> = ({ label, id, type, required = true }) => {
  return (
    <div className="flex flex-col my-3">
      <label
        htmlFor={id}
        className="text-[#CACACA] font-semibold text-base leading-6 font-noto my-1"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        className="bg-[#191B20] text-white border border-[#454545] outline-0 py-2 px-4 font-noto"
      />
    </div>
  );
};
export default Input;
