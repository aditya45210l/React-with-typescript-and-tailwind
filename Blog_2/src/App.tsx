import Navigaitons from "./Components/Navigaitons";
import PeopleToFollows from "./Components/PeopleToFollows";
import BlogsProvider, { useBlogs } from "./Components/Shared/BlogsProvider";
import TopTopic from "./Components/TopTopic";
import TrendingLists from "./Components/TrendingLists";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { Blog } from "./Types";
import Modal from "./Components/Modal";
import BlogForm from "./Components/BlogForm";
import ArticalLists from "./Components/ArticalLists";


const App = () => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModelForNewUser = () => {
    console.log("openModelForNewUser");
    setEditingBlog(null);
    setIsModelOpen(true);
  };

  const openModelForEditBlogs = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModelOpen(true);
  };

  return (
    <>
      <BlogsProvider>
        {/* <Navigaitons /> */}
        <div className="grid grid-cols-12 gap-2 grid-rows-[auto_1fr] transition-all delay-200">
          <div className="col-span-12 ">
            <Navigaitons />
          </div>

          <div className="lg:col-span-9 col-span-12   rounded-md shadow-md p-2 flex flex-col items-center w-full">
            {/* --------------------- <MainContent /> ---------------------*/}
              <button
                className="bg-black text-white px-5 py-2 flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-gray-800"
                onClick={openModelForNewUser}
              >
                Add Blogs
                <span>
                  <IoMdAddCircle />
                </span>
              </button>
            <section className=" p-1 w-full ">
                {/* Artical Lists  */}
                <div>
                <ArticalLists onEdit={openModelForEditBlogs}/>
                </div>
            </section>
                {isModelOpen && (
                  <Modal onClose={() => setIsModelOpen(false)}>
                    <BlogForm onClose={() => setIsModelOpen(false)} existBlog={editingBlog}/>
                  </Modal>
                )}
          </div>

          <div className="col-span-3 lg:block hidden mr-2 shrink-0 min-w-fit space-y-2">
            <PeopleToFollows />
            <TrendingLists />
            <TopTopic />
          </div>
        </div>
      </BlogsProvider>
    </>
  );
};

export default App;
