import { Card } from "../components";
import { useEffect, useState } from "react";
import DocumentCardsList from "../apis/documentCardsList";
import type { DocumentType } from "../apis/documentCardsList";
import backGround from "../assets/hero-section-documentation-back.png";
import {
  Video,
  Contact,
  Explore,
  BreadCrumb,
  CTASection,
  HeroSection,
} from "../components";

const Documentation = () => {
  const [docCards, setDocCards] = useState<DocumentType[]>([]);

  useEffect(() => {
    setDocCards(DocumentCardsList);
  }, []);

  return (
    <div className="pt-(--header-height)">
      <HeroSection backGround={backGround}>
        <h1 className="font-bold text-4xl md:text-[4rem] leading-10 text-white font-noto">
          Documentaries
        </h1>
      </HeroSection>

      <BreadCrumb
        items={[{ label: "Home", path: "/home" }, { label: "Documentation" }]}
      />

      <div className="grid gap-y-15 mx-8 sm:mx-15 lg:mx-25 pt-18 pb-10 border-y border-[#454545]">
        <Video />
        <div className="flex flex-col md:flex-row gap-x-20 xl:gap-x-50">
          <Explore
            heading={
              "Explore more than 60 Documentaries at the Museum from home."
            }
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequan"
            }
            listItems={[
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
              "Suia consequuntur magni dolores eos qui ratione voluptatem",
              "Exercitationem ullam corporis suscipit laboriosam",
            ]}
          />
          <Contact />
        </div>
      </div>

      <div className=" px-10 md:px-15 lg:px-23 pt-10 pb-28">
        <h2 className="text-white font-semibold text-4xl mb-8">
          Gallery Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {docCards.map(({ img, heading, description }) => (
            <Card img={img} heading={heading} description={description} />
          ))}
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
export default Documentation;
