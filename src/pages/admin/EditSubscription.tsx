import { useNavigate } from "react-router-dom";
import { Input, SelectOption } from "../../components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let planList = [
  "1. Sed ut perspiciatis unde omnis",
  "2. Nemo enim ipsam voluptate deserunt",
  "3. Duis aute irure dolor in reprehend",
  "4. mollit anim id est laborum",
];

const PlanChecks = ({ plan }: any) => {
  return (
    <div className="flex w-full justify-between my-8 sm:my-2">
      <p className="text-[#CACACA] font-medium text-base font-noto leading-9">
        {plan}
      </p>
      <div className="text-[#CACACA] flex gap-5 sm:gap-13">
        <label>
          <input
            type="radio"
            name="contentOwner"
            value="Yes"
            className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-gray-400"
          />{" "}
          &nbsp;Yes
        </label>
        <label>
          <input
            type="radio"
            name="contentOwner"
            value="No"
            className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-gray-400"
          />{" "}
          &nbsp;No
        </label>
      </div>
    </div>
  );
};

const EditSubscription = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <div className="px-5 sm:px-12 pb-12 pt-18 lg:pt-12 flex flex-col gap-5 md:gap-8">
      <h1 className="font-bold text-3xl md:text-[2rem] leading-10 font-noto text-white">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="mr-4 cursor-pointer"
          onClick={clickHandler}
        />
        Edit Subscription
      </h1>
      <div>
        <h2 className="font-semibold text-2xl md:text-[2rem] leading-11 font-noto text-white">
          Get the best pricing plan
        </h2>
        <p className="font-normal text-base md:text-lg leading-6 md:leading-9 font-noto text-[#929292] my-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h3 className="text-[#CACACA] font-semibold text-xl leading-10 font-noto border-b border-[#454545] pb-3">
          Edit Plan Details
        </h3>
        <div className="my-8">
          <SelectOption
            label="Name of Plan"
            id="plan"
            name="subsPlan"
            required={false}
            optionList={["Premium", "Promium", "Organizational"]}
          />
          <Input
            label="Price Range"
            id="priceRange"
            type="text"
            required={false}
          />
        </div>
        <div>
          <p className="text-[#CACACA] font-semibold text-xl leading-6 font-noto mb-6">
            Select what this plan is offering
          </p>
          <div>
            {planList.map((plan, index) => {
              return <PlanChecks plan={plan} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubscription;
