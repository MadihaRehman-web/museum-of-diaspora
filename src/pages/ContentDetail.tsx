import add from "../assets/admin/add.png";
import g1 from "../assets/gallery/g1.png";
import g2 from "../assets/gallery/g2.png";
import g3 from "../assets/gallery/g3.png";
import g4 from "../assets/gallery/g4.png";
import { Card, CTASection, HeroSection } from "../components";
import backGround from "../assets/hero-section-home-back.svg";

let mesumeList = [
  {
    img: g1,
    heading: "Excepteur sint occan",
    description:
      "1 Duis aute irure reprehenderit volupte velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
  },
  {
    img: g2,
    heading: "Excepteur sint occan",
    description:
      "2 Duis aute irure reprehenderit volupte velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
  },
  {
    img: g3,
    heading: "Quis autem vel eum",
    description:
      "3 Duis aute irure reprehenderit volupte velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
  },
  {
    img: g4,
    heading: "Excepteur sint occan",
    description:
      "4 Duis aute irure reprehenderit volupte velit esse cillum euea fugiat pariatur Excepteur sint occaecat cupidatatam.",
  },
];

const ContentDetail = () => {
  return (
    <div>
      <HeroSection backGround={backGround} element="home">
        <div className="bg-black w-80 p-8 flex flex-col gap-3">
          <button className="bg-black text-white font-semibold text-sm font-noto leading-6 py-2 text-start px-5 cursor-pointer border border-white max-w-max">
            Gallery Name
          </button>
          <p className="font-noto font-semibold text-2xl leading-8 text-white">
            Excepteur sint occan Lorem
          </p>
          <p className="font-normal text-sm font-noto leading-7 text-white">
            about 2686 BC-AD 396
          </p>
        </div>
      </HeroSection>
      <div className="p-8 md:p-10 xl:p-25">
        <h2 className="font-medium font-noto text-white text-2xl sm:text-[2.5rem] leading-11 mb-8 sm:mb-12">
          Explore the fascinating history.
        </h2>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-25">
          <div className="md:w-2/3 h-100 bg-amber-300">
            <img src="/coverImage.jpg" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-2xl sm:text-[2rem] leading-11 font-noto text-white">
              Creator Info
            </p>
            <div className="py-6 my-4 border-y border-[#454545]">
              <p className="font-medium text-lg sm:text-xl leading-8 font-noto text-white">
                Created by
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Name:&nbsp;
                </span>
                John Doe
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Email:&nbsp;
                </span>
                johndoe@email.com
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xll leading-10">
                  Phone:&nbsp;
                </span>
                +44 (0)20 7323 8933
              </p>
              <p className="text-[#929292] font-noto font-normal text-lg sm:text-xl leading-10 mt-8">
                <span className="text-[#CACACA] font-noto font-normal text-lg sm:text-xl leading-10">
                  Link:&nbsp;
                </span>
                www.linkurl.com
              </p>
            </div>
            <button className="bg-white w-full py-2 font-semibold my-5">
              Donate Now
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl lg:text-[2rem] leading-8 md:leading-12 font-noto text-white md:w-2/3 my-6">
            Spanning over 700 years, Room 41 traces the story of Europe from AD
            300.
          </h2>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-18">
            <div className="md:w-2/3">
              <p className="font-normal md:text-xl leading-6 sm:leading-9 font-noto text-[#929292] mb-8">
                The centuries AD 300–1100 witnessed great change in Europe. The
                Roman Empire broke down in the west, but continued as the
                Byzantine Empire in the east. People, objects and ideas
                travelled across the continent, while Christianity and Islam
                emerged as major religions. By 1100, the precursors of several
                modern states had developed.
              </p>
              <p className="font-normal md:text-xl leading-6 sm:leading-9 font-noto text-[#929292]">
                Europe as we know it today was taking shape. Room 41 gives an
                overview of the period and its peoples. Its unparalleled
                collections range from North Africa to Scandinavia. The
                gallery's centrepiece is the Anglo-Saxon ship burial at Sutton
                Hoo, Suffolk – one of the most spectacular and important
                discoveries in British archaeology.
              </p>
            </div>
            <div className="h-90 w-full md:w-1/3">
              <img src={add} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <CTASection
        heading="We need your support"
        description="Your support is vital and helps the Museum to share the collection with the world."
        btnText="Make a donation"
      />
      <div className="p-10 md:p-18">
        <h2 className="font-medium font-noto text-white text-3xl sm:text-[2.5rem] leading-11 mb-8">
          You may also be interested in
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {mesumeList.map(({ img, heading, description }) => (
            <Card img={img} heading={heading} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContentDetail;
