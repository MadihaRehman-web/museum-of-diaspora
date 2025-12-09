import Card from "./Card";
import { useState, useEffect } from "react";
import galleryCardsList from "../apis/galleryCardsList";
import type { GallaryCardType } from "../apis/galleryCardsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const GallarySlider = () => {
  const [galleryCards, setGallaryCards] = useState<GallaryCardType[]>([]);
  const [gallarySlider, setGallarySlider] = useState<GallaryCardType[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(startIndex + 3);

  const gallaryCardTrack = (start: number, end: number): void => {
    const sliceGallaryCards = galleryCards.slice(start, end + 1);
    setGallarySlider(() => sliceGallaryCards);
  };

  useEffect(() => {
    setGallaryCards(() => galleryCardsList);
  }, []);

  useEffect(() => {
    if (galleryCards.length > 0) {
      gallaryCardTrack(startIndex, endIndex);
    }
  }, [galleryCards, startIndex, endIndex]);

  const nextCard = () => {
    setStartIndex((prev) => (prev + 1) % galleryCards.length);
    setEndIndex((prev) => (prev + 1) % galleryCards.length);
  };

  const prevCard = () => {
    setStartIndex(
      (prev) => (prev - 1 + galleryCards.length) % galleryCards.length
    );
    setEndIndex(
      (prev) => (prev - 1 + galleryCards.length) % galleryCards.length
    );
  };

  return (
    <div className="pt-30 pb-40">
      <h2 className="font-semibold text-[2.5rem] leading-14 text-white mb-8 px-24">
        Galleries
      </h2>
      <div className="flex px-8 items-center">
        <button
          className="cursor-pointer bg-white text-lg text-black h-[33px] w-20 rounded-[50%] disabled:bg-white/40 disabled:cursor-not-allowed disabled:text-[#ccc]"
          onClick={prevCard}
          disabled={startIndex === 0}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="grid grid-cols-4 gap-8 px-8">
          {gallarySlider.map(({ img, heading, description }, index) => (
            <Card
              img={img}
              heading={heading}
              description={description}
              key={index}
            />
          ))}
        </div>
        <button
          className="cursor-pointer bg-white text-lg text-black h-[33px] w-20 rounded-[50%] disabled:bg-white/40 disabled:cursor-not-allowed disabled:text-[#ccc]"
          onClick={nextCard}
          disabled={endIndex === galleryCards.length - 1}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};
export default GallarySlider;
