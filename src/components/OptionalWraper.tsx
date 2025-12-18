const OptionalWraper = ({ children, left }: any) => {
  return (
    <div className="relative">
      {children}
      <span
        className={`text-[#454545] text-sm absolute left-${left} top-0 cursor-pointer px-2 py-1`}
      >
        (optional)
      </span>
    </div>
  );
};
export default OptionalWraper;
