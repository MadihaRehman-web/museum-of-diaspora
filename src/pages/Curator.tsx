import { AuthBtn, ProfileLink } from "../components";

const Curator = () => {
  return (
    <div className="bg-[#121418] pt-[calc(var(--header-height)+5rem)] py-18 px-10 xl:px-40 flex flex-col lg:flex-row gap-20">
      <ProfileLink />
      <div className="flex-1">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white mb-10">
          Curator Section
        </h1>
        <div className="mt-15">
          <table className="w-full table-auto text-center">
            <thead>
              <tr className="text-[#CACACA] border-b border-[#454545] font-medium text-sm leading-10 font-noto">
                <th>Image</th>
                <th>Description</th>
                <th>Owner Name</th>
                <th>Gallery Name</th>
                <th>Origin</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <img
                    src="/CuratorImages/curator1.jpg"
                    alt=""
                    className="h-18 max-w-18 object-cover rounded-md"
                  />
                </td>
                <td>
                  <p className="font-noto text-base text-white font-medium leading-6 ">
                    Excepteur sint occaecat cupidatat non proid.
                  </p>
                </td>
                <td>
                  <p className="font-noto text-base text-white font-medium leading-6 ">
                    John Doe
                  </p>
                </td>
                <td>
                  <select name="galleryName" className="bg-black text-white">
                    <option value="">eiusmod tempor incididunt</option>
                    <option value="">Duis aute irure dolor in</option>
                    <option value="">Excepteur sinta</option>
                  </select>
                </td>
                <td className="font-noto text-base text-white font-medium leading-6 text-center">
                  North America
                </td>
                <td>
                  <select
                    name="status"
                    className="text-black text-center bg-green-500 py-1 px-1 rounded"
                  >
                    <option value="">Accept</option>
                    <option value="">Reject</option>
                    <option value="">Flag</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-20">
            <AuthBtn label="Save Changes" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Curator;
