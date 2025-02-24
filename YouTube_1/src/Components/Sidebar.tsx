import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return <div className="h-screen w-20 bg-[#1A1C1E] top-0 fixed left-0 text-white">
    <ul className="p-4 flex flex-col justify-between items-center h-full">
        <div className="top">
            <li>
                <div className="mb-2">
                    <FaHome size={18}/>
                </div>
            </li>

            <li>
                <div className="mb-2">
                    <FaUser size={18}/>
                </div>
            </li>
            <li>
                <div className="mb-2">
                    <FaSearch size={18}/>
                </div>
            </li>
        </div>

        <div className="bottom">
            <li  className="mb-2">
                <IoMdSettings/>
            </li>
            <li className="mb-2">
                <FaUser/>
            </li>
        </div>
    </ul>
  </div>
  
}

export default Sidebar;
