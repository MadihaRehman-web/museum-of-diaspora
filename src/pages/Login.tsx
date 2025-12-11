import { AuthBtn, LogInInfo, SocialSignUp } from "../components";

const Login = () => {
  return (
    <div>
      <div className="px-20 pt-15 pb-35">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
          Login to Account
        </h1>
        <div className="grid grid-cols-2 gap-20 pt-12">
          <form>
            <LogInInfo />
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
export default Login;
