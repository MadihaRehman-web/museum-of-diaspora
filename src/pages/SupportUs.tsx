import backGround from "../assets/hero-section-support-back.png";
import {
  Contact,
  Explore,
  HeroSection,
  Support,
  CTASection,
} from "../components";

const SupportUs = () => {
  return (
    <div className="pt-(--header-height) bg-black">
      <HeroSection backGround={backGround}>
        <h1 className="font-bold text-[4rem] leading-10 text-white font-noto">
          Support us
        </h1>
      </HeroSection>

      <div className="flex gap-x-50 mx-25 mt-20 pt-18 pb-28 border-y border-[#454545]">
        <Explore
          heading="Your support is vital and helps the Museum to share the collection with the world."
          description="The Museum relies on support from a wide range of sources and there are many ways that you can donate to help care for and preserve the collection for future generations. You can donate as an individual, or through a foundation, trust or company. Your support helps us to do the following:"
          listItems={[
            "Create world-class exhibitions and gallery displays",
            "Care for, study and share the collection",
            "Engage local and global communities with what we do",
          ]}
        />
        <Contact />
      </div>

      <Support heading="Ways to support" />

      <CTASection
        heading="Sign up to our newsletters"
        description="Stay connected and receive all our latest news, online events and ways to visit the Museum from home."
        btnText="Sign up"
      />
    </div>
  );
};

export default SupportUs;
