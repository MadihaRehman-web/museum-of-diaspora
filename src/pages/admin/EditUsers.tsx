import { useNavigate } from "react-router-dom";
import { Input, SelectOption } from "../../components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditUsers = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <div className="px-8 sm:px-15 py-16">
      <h1 className="font-bold text-3xl sm:text-[2rem] leading-10 font-noto text-white">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="mr-4 cursor-pointer"
          onClick={clickHandler}
        />
        Users Info
      </h1>
      <div>
        <div className="w-full sm:w-2/3 my-8 sm:my-12">
          <h2 className="text-[#CACACA] font-semibold text-xl leading-10 font-noto border-b border-[#454545] pb-3 mb-8">
            UserPersonal Information
          </h2>
          <div>
            <Input label="First Name" type="text" id="fname" required={false} />
            <Input label="Last Name" type="text" id="lname" required={false} />
            <Input label="Email" type="email" id="email" required={false} />
            <Input label="Phone No." type="tel" id="phone" required={false} />
            <Input
              label="Entity Name"
              type="text"
              id="entity"
              required={false}
            />
            <Input
              label="Zip Code"
              type="number"
              id="zipCode"
              required={false}
            />
            <SelectOption
              id="country"
              label="Country"
              name="country"
              required={false}
              optionList={["United Kingdom", "USA", "Canada", "Lahore"]}
            />
          </div>
        </div>
        <div className="w-2/3 my-18">
          <h2 className="text-[#CACACA] font-semibold text-xl leading-10 font-noto border-b border-[#454545] pb-3 mb-8">
            Change/Reset Password
          </h2>
          <div>
            <Input label="Password" type="password" id="password" />
            <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUsers;
