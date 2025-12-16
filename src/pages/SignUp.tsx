import {
  AuthBtn,
  MembershipRegister,
  PersonalInfo,
  SignInInfo,
  SocialSignUp,
} from "../components";

const SignUp = () => {
  return (
    <div className="pt-(--header-height)">
      <div className="px-8 sm:px-10 xl:px-20 pt-15 pb-35">
        <h1 className="font-bold text-3xl sm:text-[2rem] leading-10 font-noto text-white">
          Create New User Account
        </h1>
        <div className="grid sm:w-1/2 lg:w-full lg:grid-cols-2 gap-10 xl:gap-20 pt-8">
          <form>
            <PersonalInfo />
            <SignInInfo />
            <MembershipRegister />
            <AuthBtn label="Create an Account" />
          </form>
          <div>
            <SocialSignUp />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
