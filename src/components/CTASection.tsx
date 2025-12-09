import support from "../assets/support.png";

const CTASection = ({ heading, description, btnText }: any) => {
  return (
    <div
      className="bg-cover bg-no-repeat px-45 py-19"
      style={{ backgroundImage: `url(${support})` }}
    >
      <div className="bg-white px-10 py-10 flex gap-5 justify-between">
        <div>
          <p className="font-semibold text-4xl leading-10">{heading}</p>
        </div>
        <div className="w-[42%] ">
          <p className="leading-7 line-clamp-2 mb-6">{description}</p>
          <button className="bg-black text-white font-semibold text-sm font-noto leading-6 py-3 text-start px-5 cursor-pointer">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
