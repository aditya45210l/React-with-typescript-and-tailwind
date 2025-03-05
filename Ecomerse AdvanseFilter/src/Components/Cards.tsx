import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";


const Cards = () => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col items-center gap-0.5 rounded border border-gray-100 p-2 shadow hover:shadow-2xl active:shadow-xl transition-all duration-100" onClick={() =>navigation('/product/2')}>
      <div>
        <img
        
          src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
          alt="product"
          className="size-36 cursor-pointer"
        />
      </div>
      <div>
        <h3 className="font-semibold hover:text-purple-800 cursor-pointer hover:underline transition-all duration-150">Essence Mascara Lash Princess</h3>
      </div>
      <div className="flex items-center justify-between min-w-full px-2">
        <div>
          <p className="text-sm text-gray-500">$19.99</p>
        </div>
        <div>
          <button className="ml-auto flex cursor-pointer items-center gap-2 transition-all delay-100 rounded border border-gray-200 bg-black px-2 py-1 text-sm text-white shadow hover:bg-gray-700">
            <FaCartShopping /> Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
