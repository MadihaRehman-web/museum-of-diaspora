import {
  CTASection,
  HeroSection,
  GallarySlider,
  MesumeSupport,
} from "../components";
import backGround from "../assets/hero-section-home-back.svg";

const Home: React.FC = () => {
  return (
    <div className="bg-black ">
      <HeroSection backGround={backGround} element="home">
        <div className="bg-white w-80 p-8 flex flex-col gap-3">
          <p className="font-noto font-semibold text-2xl leading-8">
            Welcome to the Museum
          </p>
          <p className="font-normal text-sm font-noto leading-7">
            Experience cultures across the globe, from the dawn of human history
            to the present
          </p>
          <button className="bg-black text-white font-semibold text-sm font-noto leading-6 py-3 text-start px-5 cursor-pointer">
            Plan your visit
          </button>
        </div>
      </HeroSection>

      {/* Galleries  */}
      <GallarySlider />

      <CTASection
        heading={"We need your support"}
        description={
          "Your support is vital and helps the Museum to share the collection with the world."
        }
        btnText={"Make a donation"}
      />

      {/* Mesume Support  */}
      <MesumeSupport />

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

export default Home;
