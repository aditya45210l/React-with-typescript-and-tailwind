import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Blog, tempData } from "../../Types";

interface BlogContextType {
  blogs: Blog[];
  addBlogs: (blog: Blog) => void;
  updateBlogs: (blog: Blog) => void;
  deleteBlogs: (id: number) => void;
}
const BlogsContext = createContext<BlogContextType | undefined>(undefined);

const BlogsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>(tempData);
  useEffect(() =>{
    console.log(blogs)
  },[blogs]);

  const addBlogs = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlogs = (blog: Blog) => {
    setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b)));
  };

  const deleteBlogs = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };
  return (
    <BlogsContext.Provider
      value={{ blogs, addBlogs, updateBlogs, deleteBlogs }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
export default BlogsProvider;

export const useBlogs = () =>{
  const context = useContext(BlogsContext);
  if(!context){
    throw new Error('useBlogs must be used within a BlogsProvider');
  }
  return context;
}
