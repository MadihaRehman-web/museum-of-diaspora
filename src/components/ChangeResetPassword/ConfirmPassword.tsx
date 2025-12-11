import Input from "../Input";
import AuthBtn from "../button/AuthBtn";

const ConfirmPassword = () => {
  return (
    <>
      <form className="pt-8">
        <Input label="Password" type="password" id="password" />
        <Input label="Confirm Password" type="password" id="confirmPassword" />
        <div className="mt-10">
          <AuthBtn label="Save Changes" />
        </div>
      </form>
    </>
  );
};
export default ConfirmPassword;
