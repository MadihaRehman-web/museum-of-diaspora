import { useState } from "react";

let accordianData = {
  about: {
    p1: "About ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  product: {
    p1: "Product ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
};

const Accordian = () => {
  const [activeValue, setActiveValue] = useState("about");

  return (
    <div className="mt-8 w-full md:w-150 lg:w-200">
      <div className="flex pl-5 sm:ml-10 font-noto relative top-px">
        <p
          className={`text-[#454545] font-normal sm:text-xl leading-6 px-5 py-2 cursor-pointer ${
            activeValue === "about" &&
            "text-[#CACACA] border-x border-x-[#454545] border-t-[#454545] border-t border-b border-b-[#17191E] bg-[#17191E]"
          }`}
          onClick={() => setActiveValue("about")}
        >
          About
        </p>
        <p
          className={`text-[#454545] font-normal sm:text-xl leading-6 px-5 py-2 cursor-pointer ${
            activeValue === "product" &&
            "text-[#CACACA] border-x border-[#454545] border-t bg-[#17191E]"
          }`}
          onClick={() => setActiveValue("product")}
        >
          Product Information
        </p>
      </div>
      <div className="bg-[#17191E] text-[#CACACA] font-normal leading-7 p-9 font-noto border border-[#454545]">
        {activeValue === "about" && (
          <>
            <p className="mb-4">{accordianData.about.p1}</p>
            <p className="mt-4">{accordianData.about.p1}</p>
          </>
        )}
        {activeValue === "product" && (
          <>
            <p className="mb-4">{accordianData.product.p1}</p>
            <p className="mt-4">{accordianData.product.p1}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default Accordian;
