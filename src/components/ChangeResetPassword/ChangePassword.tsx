import Input from "../Input";
import AuthBtn from "../button/AuthBtn";
import InputWraper from "../InputWraper";

const ChangePassword = ({ setStep }: any) => {
  const changePath = () => {
    setStep("step2");
  };
  return (
    <>
      <form className="pt-8">
        <InputWraper>
          <Input label="Password" type="password" id="password" />
        </InputWraper>
        <div className="mt-10">
          <AuthBtn label="Save Changes" clickHandler={changePath} />
        </div>
      </form>
    </>
  );
};
export default ChangePassword;
