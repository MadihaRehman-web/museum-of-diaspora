import {
  faBell,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import admin from "../../assets/admin/admin.png";
import add from "../../assets/admin/add.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileSidebar = () => {
  return (
    <div className="bg-black fixed right-0 top-0 w-100 h-screen px-7 py-8 ">
      <div>
        <div className="flex gap-3">
          <input
            type="search"
            placeholder="Search"
            className="bg-[#191B20] placeholder:text-[#9B9B9B] pl-4 font-noto text-sm leading-5 font-normal py-4 flex-1 outline-0 text-[#9B9B9B]"
          />
          <button className="bg-[#191B20] text-[#9B9B9B] px-4 text-xl cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </button>
        </div>
        <div className="bg-[#0B0C0F] my-9 flex flex-col gap-4 items-center py-6 border border-[#454545]">
          <img src={admin} alt="img" className="h-38 max-w-38 rounded-[50%] " />
          <h1 className="font-semibold text-2xl leading-8 font-noto text-white">
            Jenny Wilson
          </h1>
          <h2 className="text-[#9B9B9B] text-xs leading-8 font-noto font-normal">
            JennyWilson@email.com
          </h2>
          <button className="text-[#FF5656] font-noto text-sm leading-5 font-normal cursor-pointer">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
      <div>
        <img src={add} />
      </div>
    </div>
  );
};
export default ProfileSidebar;
