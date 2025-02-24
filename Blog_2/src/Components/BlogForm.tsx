import { useForm } from "react-hook-form";
import { Blog } from "../Types";
import { MdError } from "react-icons/md";
import { FC, useEffect, useState } from "react";
import { useBlogs } from "./Shared/BlogsProvider";

interface BlogFormProps {
  onClose: () => void;
  existBlog?: Blog | null;
}

const BlogForm: FC<BlogFormProps> = ({ onClose, existBlog }) => {
  const { addBlogs, updateBlogs, blogs } = useBlogs();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Blog>({
    defaultValues: {
      title: existBlog?.title || "",
      description: existBlog?.description || "",
      image: existBlog?.image || "",
      time: existBlog?.time || "",
    },
  });

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [time, setTime] = useState("");

  const handleSubmitData = (data: Blog) => {
    console.log(data);
    // setTitle(data.title);
    // setDescription(data.description);
    // setImage(data.image);
    // setTime(data.time);

    const tempBlog: Blog = {
      id: existBlog ? existBlog.id : blogs.length + 1,
      title: data.title,
      description: data.description,
      image: data.image,
      time: data.time,
    };
    if (existBlog) {
      updateBlogs(tempBlog);
    } else {
      addBlogs(tempBlog);
    }
    onClose();
  };

  console.log("componet render");

  // useEffect(() => {
  //   if (existBlog) {
  //     setTitle(existBlog.title);
  //     setDescription(existBlog.description);
  //     setImage(existBlog.image);
  //     setTime(existBlog.time);
  //   }
  // }, [existBlog]);
  return (
    <div className="flex flex-col gap-1 max-w-[30rem] w-full">
      <h1 className="text-xl">{existBlog ? "Update Blogs" : "Add Blogs"}</h1>

      {/* {Form For Create Blog} */}
      <form
        className="mx-1 my-2 flex flex-col gap-2"
        onSubmit={handleSubmit((data) => handleSubmitData(data))}
      >
        {/* Input Title */}
        <div>
          <input
            className="border outline-none border-gray-300 px-1.5 py-2 rounded min-w-full"
            type="text"
            id="title"
            placeholder="Title..."
            // onChange={(e) => setTitle(e.target.value)}
            {...register("title", { required: "Title is required!" })}
          />
          {/* {Title Error Handling} */}
          {errors.title && (
            <span className="text-red-600 text-sm flex items-center gap-1 ">
              <MdError />
              {errors.title.message}
            </span>
          )}
        </div>
        {/* {Input TextArea For Description} */}
        <div>
          <textarea
            {...register("description", {
              required: "Description is required!",
            })}
            id="description"
            className="border outline-none border-gray-300 px-1.5 py-2 rounded min-w-full"
            rows={4}
            placeholder="Description..."
          ></textarea>
          {/* {{Error Handling For Description}} */}
          {errors.description && (
            <span className="text-red-600 text-sm flex items-center gap-1 ">
              <MdError /> {errors.description.message}
            </span>
          )}
        </div>
        {/* {Input Image Url} */}
        <div>
          <input
            {...register("image", { required: "Image Url is required!" })}
            // value={image}
            type="url"
            placeholder="Image Url..."
            className="border outline-none border-gray-300 px-1.5 py-2 rounded min-w-full"
          />
          {/* {Error Handling For Image} */}
          {errors.image && (
            <span className="text-red-600 text-sm flex items-center gap-1 ">
              <MdError />
              {errors.image.message}
            </span>
          )}
        </div>
        {/* {Input Date} */}
        <div>
          <input
            // value={time}
            type="date"
            placeholder="Image Url..."
            className="border outline-none border-gray-300 px-1.5 py-2 rounded min-w-full"
            {...register("time", { required: "Date is required!" })}
          />
          {/* {Handing Error For Date} */}
          {errors.time && (
            <span className="text-red-600 text-sm flex items-center gap-1 ">
              <MdError />
              {errors.time.message}
            </span>
          )}
        </div>
        {/* {This Section is For Controls Button 'Add' 'Update' & 'Cancel'} */}

        <div className="flex justify-end gap-5">
          {/* {Add & Update Button} */}
          <button
            className="px-5 py-1.5 rounded bg-blue-700 text-white cursor-pointer hover:bg-blue-500"
            type="submit"
          >
            {existBlog ? "Update" : "Add"}
          </button>
          {/* {Cancel Button} */}
          <button
            className="px-4 py-1.5 rounded bg-gray-200 text-black cursor-pointer hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
