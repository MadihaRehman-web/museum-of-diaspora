import Input from "../Input";

const PersonalInfo = () => {
  return (
    <div className="mb-6">
      <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#CACACA] ">
        Personal Information
      </h2>
      <div className="pb-8 pt-2">
        <Input label="First Name" id="firstName" type="text" />
        <Input label="Last Name" id="lastName" type="text" />
      </div>
    </div>
  );
};
export default PersonalInfo;
