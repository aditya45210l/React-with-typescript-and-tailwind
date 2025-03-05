import { ChangeEvent, useEffect, useState } from "react";
import { useFilterContext } from "./FilterContext";

interface product {
  category: string;
}

interface FetchProduts {
  products: product[];
}

const SideBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keyowrds] = useState([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);
  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    selectedCategory,
    setSelectedCategory,
    setKeywords,
  } = useFilterContext();

  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const handleMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordChange = (keyword: string) => {
    setKeywords(keyword);
  };

  const handleResertButton = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeywords("");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchProduts = await res.json();
        setCategories(
          Array.from(new Set(data.products.map((item) => item.category))),
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="minw-64 hidden px-2 md:block">
      <div className="my-5 flex flex-col gap-3">
        {/*Logo Heading*/}
        <h2 className="text-3xl font-semibold">React Store</h2>
        {/* ---------{input cntainer} its take 3 input */}
        <div className="grid grid-cols-2 gap-1">
          <div className="col-span-2 rounded-sm border-2 border-gray-300 p-1">
            <input
              value={searchQuery}
              type="text"
              className="w-full px-3 py-1 transition-all duration-100 outline-none"
              placeholder="Search Products"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="rounded-sm border-2 border-gray-300 p-1">
            <input
              type="number"
              className="w-full px-3 py-1 transition-all duration-100 outline-none"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPrice}
            />
          </div>
          <div className="rounded-sm border-2 border-gray-300 p-1">
            <input
              value={maxPrice}
              type="number"
              className="w-full px-3 py-1 transition-all duration-100 outline-none"
              placeholder="Max"
              onChange={handleMaxPrice}
            />
          </div>
        </div>
        {/* -------------Category section  */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Categories</h2>
          <ul className="flex flex-col">
            {categories &&
              categories.map((item) => (
                <li className="flex gap-1" key={item}>
                  <input
                    type="radio"
                    id={item}
                    name="categories"
                    checked={selectedCategory === item}
                    onChange={() => handleCategoryChange(item)}
                  />
                  <label className="cursor-pointer" htmlFor={item}>
                    {item}
                  </label>
                </li>
              ))}
          </ul>
        </div>
        {/* KeyWord Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold">Keywords</h2>
          <ul className="grid grid-cols-2 gap-1 py-1">
            {keyowrds &&
              keyowrds.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleKeywordChange(item)}
                    className="w-full cursor-pointer rounded-sm border-2 border-gray-300 px-2 py-2 text-center transition-all duration-100 hover:bg-gray-100"
                  >
                    {item.toUpperCase()}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        {/* Reset Filter Button */}
        <div>
          <button
            onClick={handleResertButton}
            className="w-full cursor-pointer rounded bg-black py-2 text-lg font-semibold text-white transition-all duration-100 hover:bg-gray-700 active:bg-black"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
