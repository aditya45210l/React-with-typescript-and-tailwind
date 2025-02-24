import { FaUserCircle } from "react-icons/fa";

interface propsType {
  name: string;
  following: boolean;
}
const UserCard = ({ name, following }: propsType) => {
  return (
    <div className="border border-gray-200 rounded-lg px-2 py-1.5 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div>
          <FaUserCircle size={23} className="text-gray-500"/>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div>
        <button
          className={`cursor-pointer ${
            following
              ? "bg-white text-black border border-gray-900 px-2 py-1 hover:bg-gray-200 "
              : "bg-black text-white px-4 py-1 hover:bg-gray-600"
          }  transition-all delay-100 rounded`}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
