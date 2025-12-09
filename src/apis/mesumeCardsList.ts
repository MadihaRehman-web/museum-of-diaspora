import img1 from "../assets/mesume/m1.png";
import img2 from "../assets/mesume/m2.png";
import img3 from "../assets/mesume/m3.png";

export type MesumeCardType = {
  img: string;
  heading: string;
  description: string;
};

const mesumeCardsList: MesumeCardType[] = [
  {
    img: img1,
    heading: "Besome a Member",
    description:
      "Duis aute irure reprehenderit volupte velit esse cillum euea fugiat sint occaecat cupidatatam.",
  },
  {
    img: img2,
    heading: "Donate Now",
    description:
      "Duis aute irure reprehenderit volupte velit esse cillum euea fugiat sint occaecat cupidatatam.",
  },
  {
    img: img3,
    heading: "Submit Historical Content",
    description:
      "Duis aute irure reprehenderit volupte velit esse cillum euea fugiat sint occaecat cupidatatam.",
  },
];
export default mesumeCardsList;
