import { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-2 sm:grid-rows-3 grid-rows-4 lg:gap-6 sm:gap-8 gap-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://placehold.jp/400x300.png"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-2 sm:grid-rows-3 grid-rows-4 lg:gap-6 sm:gap-8 gap-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://placehold.jp/400x300.png"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-2 sm:grid-rows-3 grid-rows-4 lg:gap-6 sm:gap-8 gap-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://placehold.jp/400x300.png"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <div className="max-sm:hidden"><Contact /></div>,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSmall,setIsSmall] = useState(false);
  const handleChangeTab = (id: string) => {
    id && setActiveTab(id);
  };

  useEffect(() =>{
    window.addEventListener('resize',() =>{
      console.log(window.innerWidth);
      if(window.innerWidth < 640){
        setIsSmall(true);
      }else{
        setIsSmall(false);
      }
    })
  },[])

  useEffect(() =>{
    console.log(isSmall);
  },[isSmall]);
  return (
    <div>
      <div className="flex flex-row justify-around font-Arial">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              className={`flex justify-center  items-center gap-1 xl:px-20 lg:px-14 md:px-10 sm:px-6 px-3 py-1 ${
                activeTab === tab.id
                  ? "border-b-2 border-gray-500 font-semibold"
                  : "border-b border-gray-300 text-gray-700"
              } cursor-pointer ${isSmall && tab.id === 'contact'? 'hidden':'block'} ${isSmall && tab.id === 'about'? 'hidden':'block'}`}
              onClick={() => handleChangeTab(tab.id)}
            >
              <span className="pt-0.5">{tab.icon}</span>
              {tab.id}
            </button>
          );
        })}
      </div>
      <div className="mt-5 mx-2">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
