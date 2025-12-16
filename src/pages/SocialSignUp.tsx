import { AuthBtn, MembershipRegister } from "../components";

const SocialSignUp = () => {
  return (
    <div className="pt-(--header-height)">
      <div className="px-10 lg:px-20 pt-20 pb-35">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
          Select you role
        </h1>
        <form className="md:w-1/2 pt-8">
          <MembershipRegister />
          <AuthBtn label="Continue" />
        </form>
      </div>
    </div>
  );
};
export default SocialSignUp;
