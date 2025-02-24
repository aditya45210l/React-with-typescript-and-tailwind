import { FC } from "react";
import { Blog } from "../Types";
import { FaBookBookmark } from "react-icons/fa6";
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";

interface ArticalCardProps {
  article: Blog;
  deleteBlogs: () => void;
  onEdit: () => void;
}
const ArticalCard: FC<ArticalCardProps> = ({
  article,
  deleteBlogs,
  onEdit,
}) => {
  return (
    <div className="bg-white w-full rounded p-2 shadow-md flex gap-5 border border-gray-200">
      <img
        src={article.image}
        alt={article.title}
        className=" object-cover max-w-20 max-h-20 rounded-md"
      />
      <div className="flex flex-col flex-1 justify-between">
        <h1 className="text-lg font-semibold">{article.title}</h1>
        <p className="text-gray-800">{article.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{article.time}</p>
          <div className="flex gap-2">
            <button className=" cursor-pointer hover:text-gray-900">
              <FaBookmark />
            </button>
            <button
              className="text-blue-700 cursor-pointer hover:text-blue-600"
              onClick={onEdit}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-600 cursor-pointer hover:text-red-500"
              onClick={deleteBlogs}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticalCard;
