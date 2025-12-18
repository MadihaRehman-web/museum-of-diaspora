type CardType = {
  img: string;
  heading: string;
  description: string;
  clickHandler?: () => void;
};

const Card = ({ img, heading, description, clickHandler }: CardType) => {
  return (
    <div className="bg-[#23262D] cursor-pointer" onClick={clickHandler}>
      <div>
        <img src={img} alt="" className="w-full h-55" />
      </div>
      <div className="px-5 py-6">
        <h3 className="text-white font-semibold text-xl leading-8 ">
          {heading}
        </h3>
        <p className="font-normal text-sm leading-6 text-[#CACACA]">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
