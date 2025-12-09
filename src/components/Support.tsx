import { Card } from ".";
import { useEffect, useState } from "react";
import mesumeCardsList from "../apis/mesumeCardsList";
import type { MesumeCardType } from "../apis/mesumeCardsList";

type SupportType = {
  heading: string;
};

const MesumeSupport: React.FC<SupportType> = ({ heading }) => {
  const [mesumeCards, setMesumeCards] = useState<MesumeCardType[]>([]);

  useEffect(() => {
    setMesumeCards(() => mesumeCardsList);
  }, []);

  return (
    <div className="px-24 pt-20 pb-30">
      <h2 className="text-white font-medium text-[2.5rem] leading-14 font-noto mb-8">
        {heading}
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {mesumeCards.map(({ img, heading, description }, index) => (
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
export default MesumeSupport;
