import { Link } from "react-router-dom";
import support from "../assets/support.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

const CTASection = ({
  heading,
  description,
  btnText,
  authElement = true,
}: any) => {
  return (
    <div
      className="bg-cover bg-no-repeat px-10 sm:px-20 xl:px-45 py-10 sm:py-19"
      style={{ backgroundImage: `url(${support})` }}
    >
      <div className="bg-white px-10 py-10 flex flex-col md:flex-row gap-5 justify-between">
        <div>
          <p className="font-semibold text-3xl sm:text-4xl leading-10">
            {heading}
          </p>
        </div>
        <div className="md:w-[42%] w-full">
          <p className="leading-7 mb-6">{description}</p>
          <div>
            {authElement ? (
              <Link
                to="/signUp"
                className="bg-black text-white font-semibold text-sm font-noto leading-6 py-3 text-start px-5 cursor-pointer flex max-w-max items-center gap-6"
              >
                {btnText}
                <FontAwesomeIcon icon={faCircleRight} className="text-base" />
              </Link>
            ) : (
              <button className="bg-black text-white font-semibold text-sm font-noto leading-6 py-3 text-start px-5 cursor-pointer flex max-w-max items-center gap-10">
                {btnText}
                <FontAwesomeIcon icon={faCircleRight} className="text-base" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
