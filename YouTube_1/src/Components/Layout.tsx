import { useEffect, useState } from "react";
import { FaCamera, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import Tabs from "./Tabs";
import { IoMdSettings } from "react-icons/io";

const Layout = () => {
  const [banner, setBanner] = useState("https://placehold.jp/1500x400.png");
  const [avatar, setAvatar] = useState("https://placehold.jp/150x150.png");

  const handleBannerChange = (e: any) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  };
  const handleAvtarChange = (e: any) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    console.log(avatar);
  }, [avatar]);

  return (
    <div className="flex gap-3 ">
      <aside className="min-h-screen bg-gray-600 p-5 hidden text-white rounded-r-sm lg:flex flex-col justify-between fixed items-center">
        <ul className="flex  flex-col gap-10 pt-5  ">
          <li>
            <p>
              <FaHome size={20} />
            </p>
          </li>
          <li>
            <p>
              <FaUser size={20} />
            </p>
          </li>
          <li>
            <p>
              <FaSearch size={20} />
            </p>
          </li>
        </ul>
        <ul className="flex  flex-col gap-5 pb-10 ">
          <li>
            <IoMdSettings size={20} />
          </li>
          <li>
            <FaUser size={20} />
          </li>
        </ul>
      </aside>
      <main
        className=" flex-1 rounded-l-md p-2 my-1
         flex flex-col gap-3 lg:pl-18 w-screen"
      >
        {/* Profile Thumblen */}
        <div className="w-full lg:h-56 md:h-48 sm:h-36 h-28 bg-slate-200 rounded-md relative">
          <img
            src={banner}
            alt=""
            className="h-full rounded-md w-full object-cover"
          />
          <button className="absolute top-2 p-3 right-2 bg-gray-800 rounded-4xl  cursor-pointer hover:bg-gray-600 text-white">
            <label htmlFor="banner" className="cursor-pointer">
              <FaCamera size={22} />
            </label>
            <input
              id="banner"
              type="file"
              className="hidden"
              accept="images/*"
              onChange={handleBannerChange}
            />
          </button>
        </div>

        {/* Profile avtar & Details */}
        <div className="w-full min-h-52 rounded-md  flex md:flex-row flex-col items-center gap-3">
          {/* Avtar */}
          <div className="avtar flex  items-center h-full md:pl-6">
            <span className="relative rounded-full ">
              <img
                src={avatar}
                alt="avtar"
                className="object-cover rounded-full size-28 md:size-32 lg:size-40"
              />
              <button className="absolute md:left-[35%] left-[30%] bottom-1 p-3 bg-gray-800 rounded-full text-white hover:bg-gray-600 cursor-pointer">
                <label htmlFor="avtar" className="cursor-pointer">
                  <FaCamera size={20} />
                </label>
                <input
                  type="file"
                  id="avtar"
                  className="hidden"
                  accept="images/*"
                  onChange={handleAvtarChange}
                />
              </button>
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start flex-1 gap-2 md:py-5 md:px-5">
            <h1 className="md:text-3xl text-2xl font-bold font-OpenSans flex items-center justify-start gap-2">
              Huxn WebDev
              <span className="pt-1 text-red-600">
                <VscVerifiedFilled size={20} />
              </span>
            </h1>
            <p className="max-md:text-sm">
              <span className="font-bold">@huxnwebdev </span>• 122K subscribers
              • 153 videos
            </p>
            <p className="text-gray-700 sm:text-sm text-xs">
              HuXn is a talented software engineer with a passion
              <br /> for creating stunning user experiences.
            </p>
            <div>
              <button className="bg-[#FF0033] sm:px-4 sm:py-1 px-3 py-0.5 rounded text-white font-Arial cursor-pointer hover:bg-red-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Sections  */}
        <div>
          <Tabs />
        </div>
      </main>
    </div>
  );
};

export default Layout;
