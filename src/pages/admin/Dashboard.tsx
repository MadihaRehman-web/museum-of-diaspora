import dashboard from "../../assets/dashboard.png";
import Table from "../../components/admin/Table";

const Dashboard = () => {
  return (
    <div className="bg-[#121418] px-10 pt-10">
      <div className="flex just bg-[#191B20] px-15 py-15 w-full gap-15">
        <div className="w-2/3">
          <p className="font-bold text-5xl leading-14 font-noto text-white mb-5">
            Get Thousands Premium Content.
          </p>
          <p className="font-normal text-base leading-7 font-noto text-[#CACACA]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntenim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <div className="w-1/3">
          <img src={dashboard} className="h-63" />
        </div>
      </div>

      <div className="my-15">
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
