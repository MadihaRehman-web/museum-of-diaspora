import { useNavigate } from "react-router-dom";
import { AuthBtn, Input, SelectOption } from "../../components";

const ContentOwner = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/content-information");
  };
  return (
    <div className="bg-[#121418] py-18 px-8 lg:px-28 pt-[calc(var(--header-height)+4rem)]">
      <h1 className="font-bold text-2xl sm:text-[2rem] leading-10 font-noto text-white mb-5 sm:mb-10">
        Content Submission
      </h1>
      <div className="grid gap-15 md:grid-cols-2">
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Content Owner Information
          </h2>
          <div className="mt-10">
            <Input label="Name" type="text" id="name" required={false} />
            <Input label="Email" type="email" id="email" required={false} />
            <Input label="Phone" type="tel" id="phone" required={false} />
            <Input
              label="Entity Name"
              type="text"
              id="entity"
              required={false}
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Content Owner Address
          </h2>
          <div className="mt-10">
            <Input
              label="Street Address"
              type="text"
              id="name"
              required={false}
            />
            <Input label="City" type="email" id="email" required={false} />
            <Input
              label="State/Province"
              type="tel"
              id="phone"
              required={false}
            />
            <Input
              label="Zip Code"
              type="number"
              id="entity"
              required={false}
            />
            <SelectOption
              id="country"
              label="Country"
              name="country"
              optionList={["United Kingdom", "USA", "Canada", "Lahore"]}
            />
            <div className="mt-15">
              <AuthBtn label="Next" clickHandler={clickHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentOwner;
