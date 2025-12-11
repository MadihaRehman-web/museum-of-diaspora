import Input from "../Input";
import AuthBtn from "../button/AuthBtn";

const ChangeEmail = ({ setStep }: any) => {
  const changePath = () => {
    setStep("step3");
  };

  return (
    <>
      <p className="text-[#929292] font-noto font-normal leading-7 my-2">
        Enter the email address you used when you joined and we’ll send you link
        to reset your password.
      </p>
      <form className="pt-8">
        <Input label="Email" type="email" id="email" />
        <div className="mt-10">
          <AuthBtn label="Save Changes" clickHandler={changePath} />
        </div>
      </form>
    </>
  );
};
export default ChangeEmail;
