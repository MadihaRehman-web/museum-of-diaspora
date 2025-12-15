import dashboard from "../../assets/dashboard.png";
import Table from "../../components/admin/Table";

const Dashboard = () => {
  return (
    <div className="bg-[#121418] px-10 pt-10">
      <div className="flex bg-[#191B20] px-15 py-10">
        <div>
          <p className="font-bold text-3xl leading-10 font-noto text-white mb-5">
            Get Thousands Premium Content.
          </p>
          <p className="font-normal text-sm leading-7 font-noto text-[#CACACA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntenim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <div>
          <img src={dashboard} className="h-63 w-150" />
        </div>
      </div>

      <div className="my-12">
        <h1 className="font-bold text-[2rem] leading-10 font-noto text-white">
          Admin Dashboard
        </h1>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
