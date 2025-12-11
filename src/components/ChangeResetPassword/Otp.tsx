import OtpInput from "../OtpInput";
import AuthBtn from "../button/AuthBtn";

const Otp = ({ setStep }: any) => {
  const changePath = () => {
    setStep("step4");
  };
  return (
    <>
      <p className="text-[#929292] font-noto font-normal leading-7 my-2">
        Enter 6 digit code we sent to your registered email.
      </p>
      <form className="pt-8">
        <label
          htmlFor="otp"
          className="text-[#CACACA] font-semibold text-base leading-6 font-noto"
        >
          OTP Verified<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2 mt-3">
          <OtpInput />
          <OtpInput />
          <OtpInput />
          <OtpInput />
          <OtpInput />
          <OtpInput />
        </div>
        <div className="mt-10">
          <AuthBtn label="Save Changes" clickHandler={changePath} />
        </div>
      </form>
    </>
  );
};
export default Otp;
