import { useEffect, useState } from "react";

interface isFollowing {
  name: string;
  isFollowing: boolean;
  image: string;
}

export const RightSideBar = () => {
  const [topSeller, setTopSeller] = useState<isFollowing[]>([]);

  const fetchTopSeller = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=5");
      const data = await res.json();
      const TopSeller: isFollowing[] = Array.from(
        data.results.map(
          (item: { name: { first: string }; picture: { medium: string } }) => {
            const { first } = item.name;
            return {
              name: first,
              isFollowing: false,
              image: item.picture.medium,
            };
          },
        ),
      );
      setTopSeller(TopSeller);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowButton = (index: number) => {
    topSeller &&
      setTopSeller(
        topSeller.map((item, i) =>
          i === index
            ? { ...item, isFollowing: item.isFollowing ? false : true }
            : item,
        ),
      );
  };

  useEffect(() => {
    fetchTopSeller();
  }, []);

  return (
    <div className="hidden xl:block">
      <div className="my-5">
        <div>
          <h2 className="text-3xl">Top Sellers</h2>
          <ul className="flex flex-col gap-1 py-3 transition-all">
            {topSeller &&
              topSeller.map((item, index) => (
                <li
                  key={item.name}
                  className="flex grid-rows-[auto] flex-row items-center justify-between rounded border border-gray-200 px-2 py-1.5 shadow transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-8 rounded-full"
                  />
                  <p className="text-sm">{item.name}</p>
                  <button
                    onClick={() => handleFollowButton(index)}
                    className={`w-full max-w-1/3 min-w-18 cursor-pointer rounded px-2 py-1 text-sm shadow transition-all duration-200 ${
                      item.isFollowing
                        ? "bg-gray-200 text-black hover:bg-gray-300"
                        : "bg-black text-white hover:bg-gray-700"
                    }`}
                  >
                    {item.isFollowing ? "UnFollow" : "Follow"}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
