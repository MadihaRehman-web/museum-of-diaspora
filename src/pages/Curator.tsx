import { useNavigate } from "react-router-dom";
import { AuthBtn, ProfileLink } from "../components";

const tableData = [
  {
    image: "/CuratorImages/curator1.jpg",
    description: "Excepteur sint occaecat cupidatat non proid.",
    ownerName: "John Doe",
    galleryOptions: [
      "eiusmod tempor incididunt",
      "Duis aute irure dolor in",
      "Excepteur sinta",
    ],
    origin: "North America",
    statusOptions: ["Accept", "Reject", "Flag"],
  },
  {
    image: "/CuratorImages/curator2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
    ownerName: "Jane Smith",
    galleryOptions: [
      "Duis aute irure dolor in",
      "Excepteur sinta",
      "eiusmod tempor incididunt",
    ],
    origin: "Europe",
    statusOptions: ["Accept", "Reject", "Flag"],
  },
  {
    image: "/CuratorImages/curator3.jpg",
    description: "Sed do eiusmod tempor incididunt ut labore.",
    ownerName: "Alex Johnson",
    galleryOptions: [
      "Excepteur sinta",
      "eiusmod tempor incididunt",
      "Duis aute irure dolor in",
    ],
    origin: "Asia",
    statusOptions: ["Accept", "Reject", "Flag"],
  },
];

const Table = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-[#CACACA] font-medium font-noto text-sm leading-10 border-b border-[#454545] pb-12">
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Image
            </th>
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Description
            </th>
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Owner Name
            </th>
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Gallery Name
            </th>
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Origin
            </th>
            <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-white font-medium overflow-x-auto text-base leading-6">
          {tableData.map((item, index) => (
            <tr className="my-8" key={index}>
              <td className="p-3">
                <img
                  src={item.image}
                  className="h-18 w-18 object-cover rounded-md cursor-pointer"
                  onClick={() => {
                    navigate("/curator-details");
                  }}
                />
              </td>
              <td className="p-3">
                <p className="font-noto text-base text-white font-medium leading-6 ">
                  {item.description}
                </p>
              </td>
              <td className="p-3">
                <p className="font-noto text-base text-white font-medium leading-6 ">
                  {item.ownerName}
                </p>
              </td>
              <td className="p-3">
                <select name="galleryName" className="bg-[#121418] text-white">
                  {item.galleryOptions.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3">{item.origin}</td>
              <td className="p-3">
                <select
                  name="status"
                  className="text-black bg-green-500 rounded px-5 py-2 w-23 font-semibold text-xs leading-6"
                >
                  {item.statusOptions.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Curator = () => {
  return (
    <div className="bg-[#121418] pt-[calc(var(--header-height)+5rem)] py-18 px-5 xl:px-20 2xl:px-40 flex flex-col lg:flex-row gap-10 lg:gap-15">
      <ProfileLink />
      <div className="flex-1">
        <h1 className="font-bold text-3xl md:text-[2rem] leading-10 font-noto text-white md:mb-8">
          Curator Section
        </h1>
        <div className="my-5">
          <Table />
          <div className="mt-10">
            <AuthBtn label="Save Changes" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Curator;
