type ExploreType = {
  heading: string;
  description: string;
  listItems: string[];
};

const Explore: React.FC<ExploreType> = ({
  heading,
  description,
  listItems,
}) => {
  return (
    <div className="flex flex-col gap-4 lg:w-2/3 w-full">
      <h2 className="text-white font-semibold text-2xl sm:text-[2rem] leading-10 font-noto">
        {heading}
      </h2>
      <p className="text-[#929292] font-normal text-lg sm:text-xl leading-7 sm:leading-9 font-noto">
        {description}
      </p>
      <ul className="text-[#CACACA] list-disc p-6 font-medium text-lg sm:text-xl leading-7 sm:leading-9 font-noto">
        {listItems.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Explore;
