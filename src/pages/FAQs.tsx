import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

let quesAnsList = [
  {
    question:
      "Lorem ipsum dolor sit amet consecteturadipiscing eliteiusmod tempor incididunt?",
    answer:
      "Nemo eni ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem equi nesciunt. Neque porow quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    question:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
    answer:
      "Duis aute ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem equi nesciunt. Neque porow quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    question:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official?",
    answer:
      "Excepteur sint ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem equi nesciunt. Neque porow quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consecteturadipiscing eliteiusmod tempor incididunt?",
    answer:
      "Nemo eni ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem equi nesciunt. Neque porow quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedqu non numquam eius modi tempora incidunt ut labore et dolore.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<Number | null>(null);

  const takeIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#000000] py-10 px-28 flex gap-13 flex-col items-center">
      <h1 className="font-bold text-4xl leading-10 font-noto text-white">
        Frequently asked questions
      </h1>
      <div className="w-1/2 flex border border-[#CACACA]">
        <input
          type="search"
          placeholder="Search FAQs"
          className="flex-1 outline-0 bg-[#191B20] py-3 px-5 text-white placeholder:font-normal placeholder:text-sm font-noto"
        />
        <button className="bg-white px-7 my-1 mr-1 font-noto font-semibold text-sm leading-6 cursor-pointer">
          Search
        </button>
      </div>
      <div>
        <p className="font-medium text-xl leading-10 font-noto text-[#CACACA] border-b border-[#454545] text-center w-screen pb-4">
          Choose a question to quickly find the help you need
        </p>
        <div className="w-2/3 mx-auto my-10">
          {quesAnsList.map(({ question, answer }, index) => (
            <div key={index}>
              <div className="text-white font-noto font-medium text-xl leading-6 bg-[#191B20] py-4 px-4 border border-[#454545] flex justify-between my-6">
                <h2>
                  <span>Q.&nbsp;</span>
                  {question}
                </h2>
                <span
                  className="cursor-pointer"
                  onClick={() => takeIndex(index)}
                >
                  {openIndex === index ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </span>
              </div>{" "}
              {openIndex === index && (
                <p
                  className={`text-[#CACACA] font-noto text-xl leading-9 pt-5 pb-6 px-6 font-light`}
                >
                  <span className="text-white font-medium">A.&nbsp;</span>
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQs;
