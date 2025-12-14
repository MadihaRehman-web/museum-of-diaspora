const UserCard = ({ userProfile, name, email, location, joinDate }: any) => {
  return (
    <div className="bg-[#191B20] rounded-[10px] px-6 py-4 flex flex-col items-center">
      <img src={userProfile} alt="" className="h-30 w-30 rounded-[50%] mb-3" />
      <p className="text-[#CACACA] text-base leading-6 font-noto font-semibold my-2">
        {name}
      </p>
      <p className="text-xs text-[#9B9B9B] font-noto">{email}</p>
      <div className="flex justify-between w-full mt-6">
        <div>
          <p className="text-[#9B9B9B] text-[10px] font-noto font-medium">
            Location:
          </p>
          <p className="text-[#CACACA] text-[12px] font-noto font-medium">
            {location}
          </p>
        </div>
        <div>
          <p className="text-[#9B9B9B] text-[10px] font-noto font-medium">
            Join Date:
          </p>
          <p className="text-[#CACACA] text-[12px] font-noto font-medium">
            {joinDate}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
