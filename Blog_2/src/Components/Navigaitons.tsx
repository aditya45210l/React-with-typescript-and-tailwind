import { BiSearch } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";

const Navigations = () => {
  return (
    <div className="lg:p-4 sm:p-3 px-2 py-2 border-gray-200 border flex justify-between items-center w-full space-x-10 overflow-hidden box-border transition-all delay-200">
      {/* Left NavBar */}
      <div className="Search ml-4 flex flex-1 gap-2 items-center shadow border-gray-200 border rounded-full md:px-4 sm:px-2 md:py-2 sm:py-1 py-1 px-1 max-w-lg">
        <BiSearch className="text-xl" />
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search..."
        />
      </div>

      {/* Right NavBar */}
      <div className="lg:mr-[3rem]">
        <FaRegUserCircle className="md:text-3xl sm:text-2xl text-xl" />
      </div>
    </div>
  );
};

export default Navigations;
