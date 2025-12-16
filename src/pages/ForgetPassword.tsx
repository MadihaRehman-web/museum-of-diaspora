import { Input, AuthBtn } from "../components";

const ForgetPassword = () => {
  return (
    <div className="bg-[#121418] pt-(--header-height)">
      <div className="px-10 xl:px-20 pt-15 pb-35 md:w-1/2 ">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white mb-10">
          Forgot Password
        </h1>
        <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
          Personal Information
        </h2>
        <p className="text-[#929292] font-noto font-normal leading-7 my-2">
          Enter the email address you used when you joined and we’ll send you
          link to reset your password.
        </p>
        <form className="pt-8">
          <Input label="Email" type="email" id="email" />
          <div className="mt-10">
            <AuthBtn label="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;
