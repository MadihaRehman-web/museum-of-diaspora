const Contact = () => {
  return (
    <div className="flex flex-col gap-4 1/3">
      <h2 className="text-white font-semibold text-2xl sm:text-[2rem] leading-11 font-noto">
        Contact us
      </h2>
      <div className="py-8 border-y border-[#454545] ">
        <p className="text-[#CACACA] font-medium text-lg sm:text-xl leading-8 font-noto">
          For more information about supporting the Museum:
        </p>
        <div>
          <p className=" font-normal text-lg sm:text-xl leading-10 font-noto">
            <span className="text-[#CACACA]">Email: </span>
            <a href="mailto:contact@museum.com" className="text-[#929292]">
              contact@museum.com
            </a>
          </p>
          <p className=" font-normal text-lg sm:text-xl leading-10 font-noto">
            <span className="text-[#CACACA]">Contact: </span>
            <a href="tel:+442073238933" className="text-[#929292]">
              +44 (0)20 7323 8933
            </a>
          </p>
        </div>
      </div>
      <div>
        <button className="bg-white text-black font-semibold text-[16px] font-noto leading-6 py-3 px-5 cursor-pointer my-4">
          Donate Now
        </button>
      </div>
    </div>
  );
};
export default Contact;
