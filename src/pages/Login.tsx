import { Link } from "react-router-dom";
import { AuthBtn, Input, SocialSignUp } from "../components";

const Login = () => {
  return (
    <div className="pt-(--header-height)">
      <div className="px-10 xl:px-20 pt-15 pb-35">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
          Login to Account
        </h1>
        <div className="md:w-1/2 lg:w-full grid lg:grid-cols-2 gap-8 xl:gap-20 pt-12">
          <form>
            <div className="mb-18">
              <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#FFFFFF] ">
                Sign-in Information
              </h2>
              <Input label="Email" type="email" id="email" />
              <Input label="Password" type="password" id="password" />
              <Link
                to="/forget-password"
                className="text-[#21A8F3] text-end font-semibold leading-6 cursor-pointer my-5 block"
              >
                Forgot password?
              </Link>
            </div>
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
