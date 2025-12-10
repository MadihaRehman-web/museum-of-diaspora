import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialBtn from "./button/SocialBtn";

const SocialSignUp = () => {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#CACACA] ">
        Social Sign up
      </h2>
      <p className="text-base font-normal leading-10 font-noto text-[#929292]">
        Link your social account and Sign up in seconds.
      </p>
      <div className="flex gap-5 mt-8">
        <SocialBtn
          label="Facebook"
          color="bg-[#2060BF]"
          iconName={faFacebook}
        />
        <SocialBtn
          label="Instagram"
          color="bg-linear-to-r from-[#F4B950] via-[#C73E86] to-[#6F5EEB]"
          iconName={faSquareInstagram}
        />
        <SocialBtn label="Twitter" color="bg-[#21A8F3]" iconName={faLinkedin} />
      </div>
    </div>
  );
};
export default SocialSignUp;
