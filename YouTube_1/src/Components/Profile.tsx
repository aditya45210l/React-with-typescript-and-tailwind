import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

function Profile() {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://placehold.jp/1500x400.png"
  );
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://placehold.jp/100x100.png"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    < >
    <div className=" ml-[5rem] w-[94.2%] relative">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner Img"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600">
          <label className="cursor-pointer " htmlFor="banner-input">
            <FaCamera size={24} />
            <input
              type="file"
              className="hidden"
              id="banner-input"
              onChange={handleBannerChange}
              accept="image/*"
            />
          </label>
        </button>
      </div>

      {/* {profile Logos} */}

      <div className="chanel-logo mt-4 ml-4 relative border-4 border-white flex ">
        <div >
        <img
          src={profileUrl}
          alt="ProfileURl"
          className="rounded-full w-40 h-40 object-cover"
        />
        <button className="absolute left-[3.9rem]  -bottom-0.5 p-1.5 bg-gray-800 text-white rounded-full hover:bg-gray-600">
          <input
            type="file"
            name="logo-input"
            id="logo"
            accept="image/*"
            className="hidden "
            onChange={handleProfileChange}
          />
          <label htmlFor="logo" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
        </button>
        
        </div>
        {/* {Channel detail} */}
        <div className="ml-6">
          <h1 className="text-2xl font-extrabold ">Huxn WebDev</h1>
          <p className="mt-1">1M views</p>
          <p className="mt-1">This is a short description of the YouTube channel. It gives an
          overview of the content and what viewers can expect.</p>
          <button className="py-2 px-4 text-white bg-red-600 hover:bg-red-500 rounded">
            Subscribe
          </button>
        </div>
      </div>

    </div>
    <Tabs/>
    </>
  );
}

export default Profile;
