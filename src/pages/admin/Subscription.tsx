import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subscription = () => {
  return (
    <div className="p-15 flex flex-col gap-11">
      <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
        Subscription
      </h1>
      <div>
        <h2 className="font-semibold text-[2rem] leading-11 font-noto text-white">
          Get the best pricing plan
        </h2>
        <p className="font-normal text-xl leading-9 font-noto text-[#929292] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-[#191B20] px-10 py-8 flex flex-col gap-8">
          <p className="font-semibold text-xl font-noto text-white">FREEMIUM</p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <span className="font-semibold text-[2rem] font-noto text-white">
              $0
            </span>
            /month
          </p>
          <p className="font-normal text-xs font-noto leading-[18px] text-white">
            A 30 minute free trial for free users after that you need to buy a
            package
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            PNG Images
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-[#aaa]">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Responsive components
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-[#aaa]">
            <FontAwesomeIcon icon={faXmark} className="mr-2" />
            Constant updates
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-[#aaa]">
            <FontAwesomeIcon icon={faXmark} className="mr-2" />
            Custom templates
          </p>
          <button className="w-full bg-white cursor-pointer py-2 text-sm leading-[26px] font-semibold">
            Select Now
          </button>
        </div>
        <div className="bg-[#191B20] px-10 py-8 flex flex-col gap-8">
          <p className="font-semibold text-xl font-noto text-white">PREEMIUM</p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <span className="font-semibold text-[2rem] font-noto text-white">
              $20
            </span>
            /month
          </p>
          <p className="font-normal text-xs font-noto leading-[18px] text-white">
            you can browse as much as you can after buying this package
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            PNG Images
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Responsive components
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <FontAwesomeIcon icon={faXmark} className="mr-2" />
            Constant updates
          </p>
          <p className="font-normal text-base font-noto leading-[22px] text-white">
            <FontAwesomeIcon icon={faXmark} className="mr-2" />
            Custom templates
          </p>
          <button className="w-full bg-white cursor-pointer py-2 text-sm leading-[26px] font-semibold">
            Select Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
