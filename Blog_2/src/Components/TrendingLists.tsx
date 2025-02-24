import { FaArrowTrendUp } from "react-icons/fa6";

const trends = [
    {
      title: "Be the Person You Are on Vacation",
      author: "Maren Torff",
    },
    {
      title: "Hate NFTs? I have some bad news...",
      author: "Zain Levin",
    },
    {
      title: "The real impact of dark UX patterns",
      author: "Lindsey Curtis",
    },
  ];

const TrendingLists = () => {
  return (
    <div className="border border-gray-200 p-4 rounded-md shadow flex gap-2 flex-col min-w-fit ">
        <div className="flex items-center flex-row gap-1 text-lg font-semibold">

        <h2>Today's Top Trending </h2>
        <span><FaArrowTrendUp /></span>
        </div>
        <ul className="flex flex-col gap-1 ">
            {
                trends && trends.map((item,index) =>(
                    <li key={index} className="p-1 border border-gray-200 rounded-md ">
                        <p className="font-medium ">{item.title}</p>
                        <p className="text-sm text-gray-700">By @{item.author}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TrendingLists