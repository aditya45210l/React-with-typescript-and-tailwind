const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center border border-[#242424] space-y-8 py-4 px-2 max-md:hidden">
      <div className="text-white">Logo</div>
      <div className="text-gray-400">📂</div>
      <div className="text-gray-400">👲</div>
      <div className="text-gray-400">⚙️</div>
    </div>
  );
};

export default SideBar;
