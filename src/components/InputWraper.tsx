const InputWraper = ({ children }: any) => {
  return (
    <div className="relative">
      {children}
      <span className="text-[#2763D9] text-xs absolute right-3 top-[41px] cursor-pointer hover:bg-white/12 px-2 py-1">
        Edit
      </span>
    </div>
  );
};
export default InputWraper;
