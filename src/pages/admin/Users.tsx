import UsersList from "../../apis/userList";
import { UserCard } from "../../components";

const Users = () => {
  return (
    <div className="p-11">
      <h1 className="text-white font-noto text-[2rem] leading-10 font-bold">
        Users Info
      </h1>
      <div className="grid grid-cols-3 my-12 gap-8">
        {UsersList.map(
          ({ userProfile, name, email, joinDate, location }, index) => (
            <UserCard
              userProfile={userProfile}
              name={name}
              email={email}
              location={location}
              joinDate={joinDate}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Users;
