import Input from "../Input";

const SignInInfo = () => {
  return (
    <div className="my-6">
      <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#FFFFFF] ">
        Sign-in Information
      </h2>
      <div className="pb-8 pt-2">
        <Input label="Email" type="email" id="email" />
        <Input label="Password" type="password" id="password" />
        <Input label="Confirm Password" type="password" id="confirmPassword" />
        <p className="text-[#FF5656] text-end font-semibold leading-6">
          <span>*</span>Required Fields
        </p>
      </div>
    </div>
  );
};
export default SignInInfo;
