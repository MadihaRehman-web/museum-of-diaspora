import Input from "../Input";

const LogInInfo = () => {
  return (
    <div className="mb-18">
      <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#FFFFFF] ">
        Sign-in Information
      </h2>
      <Input label="Email" type="email" id="email" />
      <Input label="Password" type="password" id="password" />
      <p className="text-[#21A8F3] text-end font-semibold leading-6 cursor-pointer my-5">
        Forgot password?
      </p>
    </div>
  );
};
export default LogInInfo;
