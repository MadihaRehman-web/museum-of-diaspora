import { Input, AuthBtn } from "../components";

const CreateNewPassword = () => {
  return (
    <div className="bg-[#121418]">
      <div className="px-20 pt-15 pb-35 w-1/2 ">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white mb-10">
          Create New Password
        </h1>
        <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
          Personal Information
        </h2>
        <form className="pt-5">
          <Input label="Password" type="password" id="password" />
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
          />
          <div className="mt-10">
            <AuthBtn label="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateNewPassword;
