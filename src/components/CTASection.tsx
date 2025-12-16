import support from "../assets/support.png";

const CTASection = ({ heading, description, btnText }: any) => {
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
          <button className="bg-black text-white font-semibold text-sm font-noto leading-6 py-3 text-start px-5 cursor-pointer">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
