const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];

const TopTopic = () => {
  return (
    <div className="border border-gray-200 p-4 rounded-md shadow flex gap-2 flex-col min-w-fit ">
      <div className="flex items-center flex-row gap-1 text-lg font-semibold">
        <h2>Topic For You </h2>
      </div>
      <ul className="flex flex-row gap-1 flex-wrap ">

        {
            topics.map((topic,index) =>(
                <li key={index} className="px-2 py-1 rounded-3xl bg-gray-200 text-xs cursor-pointer hover:bg-gray-300 transition-all "><p>#{topic}</p></li>
            ))
        }
      </ul>
    </div>
  );
};

export default TopTopic;
