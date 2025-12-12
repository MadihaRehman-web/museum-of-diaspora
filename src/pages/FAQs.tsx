const FAQs = () => {
  return (
    <div className="bg-[#121418] py-25 px-28 flex gap-13 flex-col items-center">
      <h1 className="font-bold text-4xl leading-10 font-noto text-white">
        Frequently asked questions
      </h1>
      <div className="w-1/2 flex border border-[#CACACA]">
        <input
          type="search"
          placeholder="Search FAQs"
          className="flex-1 outline-0 bg-[#191B20] py-3 px-5 text-white placeholder:font-normal placeholder:text-sm font-noto"
        />
        <button className="bg-white px-7 my-1 mr-1 font-noto font-semibold text-sm leading-6">
          Search
        </button>
      </div>
      <div>
        <p className="font-medium text-xl leading-10 font-noto text-[#CACACA] border-b border-[#454545] text-center w-screen pb-4">
          Choose a question to quickly find the help you need
        </p>
      </div>
    </div>
  );
};
export default FAQs;
