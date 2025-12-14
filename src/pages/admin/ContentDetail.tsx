import coverImage from "../../assets/coverImage.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentDetail = () => {
  return (
    <div className="p-11">
      <h1 className="text-white font-noto text-[2rem] leading-10 font-bold mb-10">
        Content Detail
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex gap-5">
          <img
            src="/CuratorImages/curator1.jpg"
            className="h-18 w-18 rounded object-cover"
          />
          <div className="flex flex-col justify-center gap-2">
            <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
              Name
            </p>
            <p className="font-semibold text-base text-white leading-6 font-noto">
              Guy Hawkins
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
            Status
          </p>
          <div className="relative">
            <select
              name="status"
              className=" text-black w-30 bg-green-400 py-2 rounded px-5 appearance-none cursor-pointer text-start"
            >
              <option value="">Accept</option>
              <option value="">Reject</option>
              <option value="">Flag</option>
            </select>
            <span className="absolute left-22 top-2 pointer-events-none">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h2 className="bg-[#191B20] font-semibold text-sm text-white leading-6 font-noto py-3 pl-7 rounded-[10px]">
          Personal details
        </h2>
        <div className="grid grid-cols-2 p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Email
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                Guyhawkins@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Entity Name{" "}
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                Guy Hawkins
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Phone Number
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                3487629040
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Content Owner
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                Yes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h2 className="bg-[#191B20] font-semibold text-sm text-white leading-6 font-noto py-3 pl-7 rounded-[10px]">
          Address
        </h2>
        <div className="grid grid-cols-2 p-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Street Address
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                State/Province
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                New Mexico
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Country
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                New Mexico
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                City
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                Allentown
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base text-[#CACACA] leading-6 font-noto">
                Zip Code
              </p>
              <p className="font-semibold text-base text-white leading-6 font-noto">
                31134
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h2 className="bg-[#191B20] font-semibold text-sm text-white leading-6 font-noto py-3 pl-7 rounded-[10px]">
          Video
        </h2>
        <div className="my-16 h-100 w-full">
          <video controls className="w-full h-full object-cover rounded-lg">
            <source src="/videos/libraryVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="my-14">
        <h2 className="bg-[#191B20] font-semibold text-sm text-white leading-6 font-noto py-3 pl-7 rounded-[10px]">
          Cover Image
        </h2>
        <div className="my-15">
          <img src={coverImage} className="w-full h-100" />
        </div>
      </div>
    </div>
  );
};
export default ContentDetail;
