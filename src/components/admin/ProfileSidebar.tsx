import { useState } from "react";
import {
  faBell,
  faArrowRightFromBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import admin from "../../assets/admin/admin.png";
import add from "../../assets/admin/add.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="xl:hidden fixed top-5 right-5 z-50 text-white text-2xl cursor-po"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="xl:hidden fixed bg-black/60 z-40"
        />
      )}

      <div
        className={`
          bg-black fixed right-0 top-0 h-screen px-7 py-8 z-50 w-75 xl:w-90 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } xl:translate-x-0`}
      >
        <button
          onClick={() => setOpen(false)}
          className="xl:hidden absolute top-2 right-2 text-white text-2xl cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div>
          <div className="flex gap-3">
            <input
              type="search"
              placeholder="Search"
              className="bg-[#191B20] placeholder:text-[#9B9B9B] pl-4 font-noto text-sm py-4 flex-1 outline-0 text-[#9B9B9B]"
            />
            <button className="bg-[#191B20] text-[#9B9B9B] px-4 text-xl cursor-pointer">
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>

          <div className="bg-[#0B0C0F] my-9 flex flex-col gap-4 items-center py-6 border border-[#454545]">
            <img src={admin} className="h-38 max-w-38 rounded-full" />
            <h1 className="text-white text-2xl font-semibold">Jenny Wilson</h1>
            <h2 className="text-[#9B9B9B] text-xs">JennyWilson@email.com</h2>
            <button className="text-[#FF5656] text-sm">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="mr-2"
              />
              Logout
            </button>
          </div>
        </div>

        <div>
          <img src={add} />
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
