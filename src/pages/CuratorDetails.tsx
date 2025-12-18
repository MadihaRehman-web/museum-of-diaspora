import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordian } from "../components";

const CuratorDetails = () => {
  return (
    <div className="pt-(--header-height) bg-[#121418]">
      <div className="mx-5 md:mx-10 xl:mx-23 pt-12 pb-20">
        <h2 className="font-medium font-noto text-white text-2xl sm:text-3xl md:text-[2.5rem] leading-8 sm:leading-12 mb-8 sm:mb-12 md:w-2/3">
          Spanning over 700 years, Room 41 traces the story of Europe from AD
          300.
        </h2>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-25">
          <div className="md:w-2/3 h-70 sm:h-100">
            <img src="/coverImage.jpg" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-2xl sm:text-[2rem] leading-11 font-noto text-white">
              Owner Info
            </p>
            <div className="py-6 my-4 border-y border-[#454545]">
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Name:&nbsp;
                </span>
                John Doe
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Email:&nbsp;
                </span>
                johndoe@email.com
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xll leading-10">
                  Phone:&nbsp;
                </span>
                +44 (0)20 7323 8933
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Origin:&nbsp;
                </span>
                Europe
              </p>
            </div>
            <div className="relative">
              <select className="bg-[#43FBAE] w-full py-2 font-semibold my-5 leading-6 pl-5 pr-8 appearance-none cursor-pointer">
                <option value="">Accept</option>
                <option value="">Reject</option>
                <option value="">Pending</option>
              </select>
              <span className="absolute text-black right-4 top-7 pointer-events-none">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
        </div>
        <Accordian />
      </div>
    </div>
  );
};
export default CuratorDetails;
