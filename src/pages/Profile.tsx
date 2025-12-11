import avator from "../assets/avator.png";
import {
  AuthBtn,
  Input,
  InputWraper,
  ProfileLink,
  SelectOption,
} from "../components";

const Profile = () => {
  return (
    <div className="pt-(--header-height) bg-[#121418]">
      <div className="py-18 px-45 grid grid-cols-4 gap-20 ">
        <ProfileLink />
        <div>
          <h2 className="font-bold text-[2rem] leading-10 font-noto text-white">
            My Account
          </h2>
          <div className="mt-10">
            <h3 className="font-semibold text-xl text-[#CACACA] leading-10 font-noto border-b pb-4 border-[#454545]">
              Profile picture
            </h3>
            <img
              src={avator}
              alt=""
              className="max-h-50 max-w-50 rounded-[50%] border-5 border-white my-12"
            />
          </div>
        </div>
        <div className="mt-20 col-span-2">
          <h3 className="font-semibold text-xl text-[#CACACA] leading-10 font-noto border-b pb-4 border-[#454545]">
            Personal Information
          </h3>
          <form action="">
            <InputWraper>
              <Input label="First Name" id="fname" type="text" />
            </InputWraper>
            <InputWraper>
              <Input label="LastName" id="lname" type="text" />
            </InputWraper>
            <Input label="Email" id="email" type="email" />
            <Input label="Phone No." id="phone" type="tel" />
            <Input label="Entity Name" id="entity" type="text" />
            <Input label="Zip code" id="zipCode" type="text" />
            <SelectOption
              id="userCountry"
              name="userCountry"
              label="Country"
              optionList={["UAE", "Arab", "Pakistan", "Canada"]}
            />
            <div className="mt-15">
              <AuthBtn label="Save Changes" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
