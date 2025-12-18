import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import siteLogo from "../assets/site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

let iconsName = [
  { icon: faInstagram, link: "https://www.instagram.com/" },
  { icon: faLinkedinIn, link: "https://www.linkedin.com/" },
  { icon: faFacebookF, link: "https://www.facebook.com/" },
];

const Footer: React.FC = () => {
  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      <div className="px-5 sm:px-15 lg:px-23 pt-10 sm:pt-22 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-white font-medium text-2xl leading-14">
            Connect with us
          </p>
          <div className="flex gap-4">
            {iconsName.map(({ icon, link }, index) => (
              <Icon iconName={icon} link={link} key={index} />
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
          <p
            className="text-white text-end cursor-pointer"
            onClick={clickHandler}
          >
            Back to the top &nbsp;
            <FontAwesomeIcon icon={faCircleArrowUp} />
          </p>
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
