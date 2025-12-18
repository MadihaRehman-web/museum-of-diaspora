import TableData from "../../apis/adminTable";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/admin/content-detail-admin");
  };
  return (
    <table className="w-full my-8">
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
            Origin
          </th>
          <th className="p-3 tracking-wide font-medium text-sm leading-6 text-left w-1/5">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="text-white font-medium overflow-x-auto text-base leading-6">
        {TableData.map((items, index) => {
          return (
            <tr
              className="my-8 cursor-pointer"
              key={index}
              onClick={clickHandler}
            >
              <td className="p-3">
                <img
                  src={items.img}
                  className="h-18 w-18 object-cover rounded-md"
                />
              </td>
              <td className="p-3">
                <p>{items.description}</p>
              </td>
              <td className="p-3">
                <p>{items.ownerName}</p>
              </td>
              <td className="p-3">
                <p>{items.origin}</p>
              </td>
              <td className="p-3">
                <button
                  className={`${
                    items.status === "Accepted" && "bg-green-500"
                  } ${items.status === "Rejected" && "bg-[#FF5656]"} ${
                    items.status === "Flaged" && "bg-[#CACACA]"
                  } px-5 py-2 w-23 rounded text-black font-semibold text-xs leading-6`}
                >
                  {items.status}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
