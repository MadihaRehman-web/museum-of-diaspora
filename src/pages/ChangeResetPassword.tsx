import { useState } from "react";
import {
  Otp,
  ChangeEmail,
  ProfileLink,
  ChangePassword,
  ConfirmPassword,
} from "../components";

const ChangeResetPassword = () => {
  const [step, setStep] = useState("step1");

  return (
    <div className="bg-[#121418]">
      <div className="py-18 px-45 flex gap-20">
        <ProfileLink />
        <div className="w-1/2">
          <h1 className="font-bold text-[2rem] leading-10 font-noto text-white mb-10">
            My Account
          </h1>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Change/Reset Password
          </h2>
          {step === "step1" && <ChangePassword setStep={setStep} />}
          {step === "step2" && <ChangeEmail setStep={setStep} />}
          {step === "step3" && <Otp setStep={setStep} />}
          {step === "step4" && <ConfirmPassword />}
        </div>
      </div>
    </div>
  );
};
export default ChangeResetPassword;
