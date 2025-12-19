import { Card } from ".";
import { useEffect, useState } from "react";
import museumeCardsList from "../apis/museumeCardsList";
import type { MuseumeCardType } from "../apis/museumeCardsList";

type SupportType = {
  heading: string;
};

const Support: React.FC<SupportType> = ({ heading }) => {
  const [museumeCards, setMuseumeCards] = useState<MuseumeCardType[]>([]);

  useEffect(() => {
    setMuseumeCards(() => museumeCardsList);
  }, []);

  return (
    <div className="lg:px-24 sm:px-10 px-8 pt-12 pb-30">
      <h2 className="text-white font-medium text-[2.5rem] leading-14 font-noto mb-8">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 lg:gap-10 gap-5">
        {museumeCards.map(({ img, heading, description }, index) => (
          <Card
            img={img}
            heading={heading}
            description={description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Support;
