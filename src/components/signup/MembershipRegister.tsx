import SelectOption from "../SelectOption";

const MembershipRegister = () => {
  return (
    <div className="mt-10 mb-18">
      <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-1 border-[#454545] text-[#CACACA] ">
        Membership Registeration
      </h2>
      <SelectOption
        id="membership"
        name="membership"
        label="Access Level"
        hiddenText="As a Member"
        optionList={["Role1", "Role2", "Role2", "Role4"]}
      />
    </div>
  );
};
export default MembershipRegister;
