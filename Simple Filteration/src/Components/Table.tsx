import { ChangeEvent, useState } from "react";
import { data } from "../Utils/data.ts";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdSort } from "react-icons/md";

const Table = () => {
  // State to store the list of projects
  const [projects, setProjects] = useState(data);

  // State to control the visibility of the sorting dropdown
  const [dropDown, setDropDown] = useState(false);

  // State to track the current sorting configuration (key and order)
  const [shortConfig, setShortConfig] = useState<{
    key: string;
    description: string;
  } | null>(null);

  // State to control the visibility of the filter dropdown
  const [filterVisible, setFilterVisible] = useState(false);

  // State to manage filter input values
  const [filter, setFilter] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });

  const [searchQueary, setSearchQueary] = useState("");

  // {Functions Area}

  /**
   * Sorts the projects based on the selected key.
   * Supports sorting by client, country, email, project, progress, status, and date.
   * Toggles between ascending and descending order.
   */
  const sortProjects = (
    key:
      | "client"
      | "country"
      | "email"
      | "project"
      | "progress"
      | "status"
      | "date"
  ) => {
    // Create a copy of the current projects list
    const sortedProjects = [...projects];

    // If already sorted in ascending order, switch to descending
    if (
      shortConfig &&
      shortConfig.key === key &&
      shortConfig.description === "asc"
    ) {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setShortConfig({ key, description: "desc" });
      console.log("desc");
    } else {
      // Otherwise, sort in ascending order
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setShortConfig({ key, description: "asc" });
    }

    // Update state with sorted projects
    setProjects(sortedProjects);
  };

  /**
   * Handles sorting when a sorting option is clicked.
   * Calls the sortProjects function and closes the dropdown.
   */
  const handleShortOptionClick = (
    key:
      | "client"
      | "country"
      | "email"
      | "project"
      | "progress"
      | "status"
      | "date"
  ) => {
    sortProjects(key);
    setDropDown(false); // Close the dropdown after selecting an option
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    console.log(e.target.name);
    // console.log(e.target.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
      searchQueary === "" ||
      (Object.values(project).some((value) =>
        value.toLowerCase().includes(searchQueary.toLowerCase())
      ) &&
        filter.name === "") ||
      (project.client.toLowerCase().includes(filter.name.toLowerCase()) &&
        filter.country === "") ||
      (project.country.toLowerCase().includes(filter.country.toLowerCase()) &&
        filter.email === "") ||
      (project.email.toLowerCase().includes(filter.email.toLowerCase()) &&
        filter.project === "") ||
      (project.project.toLowerCase().includes(filter.project.toLowerCase()) &&
        filter.status === "") ||
      project.status.toLowerCase().includes(filter.status.toLowerCase())
  );

  const [currentPage, setCurrentpage] = useState<number>(1);
  const itemPerPage = 5;
  const startingItem = (currentPage - 1) * itemPerPage;
  const totalPages = Math.ceil(filteredProjects.length / itemPerPage);
  const currentItemShow = filteredProjects.slice(startingItem, startingItem + itemPerPage)
  return (
    <div className="p-3 flex flex-col gap-3 md:ml-16 max-w-screen ">
      {/* {Sorting container} */}
      <div className="flex flex-row gap-8">
        {/* {Sorting dropdown button} */}
        <div className="relative max-w-fit">
          <button
            className="flex flex-row gap-3 rounded border border-gray-500 items-center text-white px-4 py-2 cursor-pointer group"
            onClick={() => setDropDown(!dropDown)}
          >
            <BiSort className="group-hover:rotate-180 transition-all duration-300" />
            <p>Sort</p>
            <AiOutlineDown className="group-active:rotate-180 transition-all" />
          </button>

          {/* {Sorting options dropdown} */}
          {dropDown && (
            <div className="absolute text-white bg-gray-800 rounded shadow-lg top-full left-0 w-full transition-all">
              <button
                className="px-4 py-2 w-full block hover:border-2 border-gray-400 cursor-pointer rounded transition-all"
                onClick={() => handleShortOptionClick("client")}
              >
                Name
              </button>
              <button
                className="px-4 py-2 w-full block hover:border-2 border-gray-400 cursor-pointer rounded transition-all"
                onClick={() => handleShortOptionClick("country")}
              >
                Country
              </button>
              <button
                className="px-4 py-2 w-full block hover:border-2 border-gray-400 cursor-pointer rounded transition-all"
                onClick={() => handleShortOptionClick("date")}
              >
                Date
              </button>
            </div>
          )}
        </div>

        {/* {Filter container} */}
        <div className="relative minw-fit">
          {/* {Filter button} */}
          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="flex flex-row gap-3 rounded border border-gray-500 items-center text-white px-4 py-2 cursor-pointer min-w-fit"
          >
            <MdSort /> Filters <AiOutlineDown />
          </button>

          {/* {Filter input fields} */}
          {filterVisible && (
            <div className="absolute min-w-full top-full max-sm:-left-10 mt-2 rounded px-3 pt-4 pb-3 bg-gray-800 border-2 border-gray-500 text-white">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Filter By Name
                </label>
                <input
                  value={filter.name}
                  onChange={handleFilterChange}
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 rounded p-1 outline-none bg-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm">
                  Filter By country
                </label>
                <input
                  value={filter.country}
                  onChange={handleFilterChange}
                  type="text"
                  id="country"
                  name="country"
                  className="border border-gray-400 rounded p-1 outline-none bg-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm">
                  Filter By email
                </label>
                <input
                  value={filter.email}
                  onChange={handleFilterChange}
                  type="text"
                  id="email"
                  name="email"
                  className="border border-gray-400 rounded p-1 outline-none bg-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Filter By project
                </label>
                <input
                  value={filter.project}
                  onChange={handleFilterChange}
                  type="text"
                  id="project"
                  name="project"
                  className="border border-gray-400 rounded p-1 outline-none bg-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Filter By status
                </label>
                <input
                  value={filter.status}
                  onChange={handleFilterChange}
                  type="text"
                  id="status"
                  name="status"
                  className="border border-gray-400 rounded p-1 outline-none bg-gray-900"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* {Main Table} */}
      <div className="overflow-x-auto">
        <table className="border shrink rounded-t bg-gray-900 border-gray-800 rounded-md h-fit flex-wrap min-w-full max-w-screen text-white max-sm:text-sm">
          <thead>
            <tr className="rounded">
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left max-sm:hidden">
                Image
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left">
                Name
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left max-lg:hidden">
                Country
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left max-xl:hidden">
                Email
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left">
                Project Name
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left">
                Task Progress
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left">
                Status
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left">
                Date
              </th>
              <th className="lg:px-5 md:px-3 px-2 lg:py-3 py-2 text-left max-lg:hidden">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItemShow &&
              currentItemShow.map((project, index) => (
                <tr key={index} className="border border-gray-800 table-row">
                  <td className="lg:px-4 md:px-3 px-2 py-2 max-sm:hidden">
                    <img
                      src={project.image}
                      alt={project.client}
                      className="size-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-2">
                    {project.client}
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-2 max-lg:hidden">
                    {project.country}
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-2 max-xl:hidden">
                    {project.email}
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-2">
                    {project.project}
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-1">
                    {/* Progress bar */}
                    <div className="w-full rounded bg-gray-700">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                  </td>
                  <td
                    className={`lg:px-4 md:px-3 px-2 py-2 ${
                      project.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </td>
                  <td className="lg:px-4 md:px-3 px-2 py-2">{project.date}</td>
                  <td className="lg:px-4 md:px-3 px-2 py-2 max-lg:hidden">
                    <BsThreeDots />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end text-white gap-3 items-center ">
        <button className="px-4 py-2 border bg-gray-800 border-gray-700 rounded cursor-pointer hover:bg-gray-900 active:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed" disabled={currentPage === 1} onClick={() => setCurrentpage(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="px-4 py-2 border bg-gray-800 border-gray-700 rounded cursor-pointer hover:bg-gray-900 active:bg-gray-800" disabled={currentPage === totalPages} onClick={() =>setCurrentpage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
