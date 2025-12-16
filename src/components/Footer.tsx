import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import siteLogo from "../assets/site-logo.svg";

let iconsName = [faInstagram, faLinkedinIn, faFacebookF];

const Footer: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="px-5 sm:px-15 lg:px-23 pt-10 sm:pt-22 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-white font-medium text-2xl leading-14">
            Connect with us
          </p>
          <div className="flex gap-4">
            {iconsName.map((iconName, index) => (
              <Icon iconName={iconName} key={index} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-white">
            Enter your email address to receive our newsletter
          </p>
          <form action="" className="flex mt-3 mb-2">
            <input
              type="email"
              className="text-white px-5 py-3 border border-white outline-0 flex-1"
            />
            <button className="bg-white px-3 sm:px-5 py-3 cursor-pointer">
              Sign up
            </button>
          </form>
          <p className="text-white text-end">Back to the top</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3 p-8 sm:pt-9 sm:pb-12 border-t border-white/25 px-5 sm:px-23">
        <div>
          <img src={siteLogo} alt="site-logo" />
        </div>
        <p className="font-noto font-normal text-sm text-white/70">
          © 2022 The Museum, All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
