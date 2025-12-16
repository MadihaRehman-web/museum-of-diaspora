import { useState, useEffect } from "react";
import galleryCardsList from "../apis/galleryCardsList";
import type { GallaryCardType } from "../apis/galleryCardsList";
import backGround from "../assets/hero-section-gallery-back.jpg";
import {
  Card,
  Contact,
  Explore,
  BreadCrumb,
  CTASection,
  HeroSection,
} from "../components";

const Galleries = () => {
  const [galleryCards, setGallaryCards] = useState<GallaryCardType[]>([]);

  useEffect(() => {
    setGallaryCards(galleryCardsList);
  }, []);

  return (
    <div className="pt-(--header-height)">
      <HeroSection backGround={backGround} element="gallery">
        <h1 className="font-bold text-4xl md:text-[4rem] leading-11 text-white font-noto">
          Excepteur sint occan
        </h1>
      </HeroSection>

      <BreadCrumb currentPage="Galleries" />

      <div className="flex flex-col lg:flex-row gap-x-20 xl:gap-x-50 mx-5 sm:mx-15 xl:mx-25 pt-18 pb-28 border-y border-[#454545]">
        <Explore
          heading="Explore more than 60 galleries at the Museum from home."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequan"
          listItems={[
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
            "Suia consequuntur magni dolores eos qui ratione voluptatem",
            "Exercitationem ullam corporis suscipit laboriosam",
          ]}
        />
        <Contact />
      </div>

      <div className="px-5 sm:px-15 xl:px-23 pt-10 pb-28">
        <h2 className="text-white font-semibold text-4xl mb-8">
          Gallery Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryCards.map(({ img, heading, description }) => {
            return (
              <Card img={img} heading={heading} description={description} />
            );
          })}
        </div>
      </div>

      <CTASection
        heading={"Sign up to our newsletters"}
        description={
          "Stay connected and receive all our latest news, online events and ways to visit the Museum from home."
        }
        btnText={"Sign up"}
      />
    </div>
  );
};

export default Galleries;
