import {
  AuthBtn,
  MembershipRegister,
  PersonalInfo,
  SignInInfo,
  SocialSignUp,
} from "../components";

const SignUp = () => {
  return (
    <div>
      <div className="px-20 pt-15 pb-35">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
          Create New User Account
        </h1>
        <div className="grid grid-cols-2 gap-20 pt-8 ">
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
