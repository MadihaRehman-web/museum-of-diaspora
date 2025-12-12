import { AuthBtn, Input, SelectOption } from "../components";

const ContentSubmission = () => {
  return (
    <div className="bg-[#121418] py-18 px-28">
      <h1 className="font-bold text-[2rem] leading-10 font-noto text-white mb-10">
        Content Submission
      </h1>
      <div className="grid gap-15 grid-cols-2">
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Submitter Information
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
            <div className="text-[#CACACA] flex justify-between my-10">
              <p className="font-semibold text-base leading-6 font-noto ">
                Are you Content Owner?
              </p>
              <div className="flex gap-7">
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
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Submitter Address
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
              <AuthBtn label="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentSubmission;
