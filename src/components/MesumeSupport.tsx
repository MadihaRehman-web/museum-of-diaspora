import { Card } from "../components";
import { useEffect, useState } from "react";
import mesumeCardsList from "../apis/mesumeCardsList";
import type { MesumeCardType } from "../apis/mesumeCardsList";

const MesumeSupport = () => {
  const [mesumeCards, setMesumeCards] = useState<MesumeCardType[]>([]);

  useEffect(() => {
    setMesumeCards(() => mesumeCardsList);
  }, []);

  return (
    <div className="px-24 pt-30 pb-40">
      <h2 className="text-white font-medium text-[2.5rem] leading-14 font-noto mb-8">
        Support the Mesume
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
