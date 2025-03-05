import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Cards from "./Cards";

const MainBar = () => {
  const [filterRotate, setFilterRotate] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  

  useEffect(() => {
    if (filterRotate) {
      // Add a delay before showing buttons
      setTimeout(() => {
        setShowButtons(true);
      }, 100); // Adjust delay if needed
    } else {
      setShowButtons(false);
    }
  }, [filterRotate]);

  return (
    <div className="my-5 min-h-full gap-1">
      <div className="p-2 shadow">
        <div className="relative">
          <div className="max-w-fit">
            <button
              onClick={() => setFilterRotate(!filterRotate)}
              className="flex cursor-pointer items-center gap-1 rounded border border-gray-200 px-3 py-1 shadow transition-all duration-100 hover:bg-gray-100"
            >
              <RxHamburgerMenu
                className={`transition-transform duration-300 ${filterRotate ? "rotate-90" : "rotate-0"}`}
              />
              <p>Filter</p>
            </button>
          </div>
          {/* Dropdown */}
          {filterRotate && (
            <div
              className={`absolute flex w-fit flex-col gap-0.5 bg-white py-1 transition-all duration-500 ease-in-out ${showButtons ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
            >
              <button className="cursor-pointer border border-gray-100 px-1 py-1 shadow transition-all duration-100 hover:bg-gray-200">
                Cheap
              </button>
              <button className="cursor-pointer border border-gray-100 px-1 py-1 shadow transition-all delay-100 duration-100 hover:bg-gray-200">
                button
              </button>
              <button className="cursor-pointer border border-gray-100 px-1 py-1 shadow transition-all delay-200 duration-100 hover:bg-gray-200">
                expensive
              </button>
            </div>
          )}
        </div>

      </div>
      <div className=" mt-1 p-2 grid lg:grid-cols-4 grid-cols-3 gap-2 row-auto">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>

    </div>
  );
};

export default MainBar;
