interface CardProps {
  title: string;
  description: string;
  image: string;

}

const Card = ({ title, description, image}: CardProps) => {
  return (
    <div className=" shadow-2xl rounded-xl p-5 border border-gray-200" >
      <img src={image} alt={title} className="w-full max-h-46 object-cover mb-0.5 rounded shadow"/>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-gray-800 ">{description}</p>
        <div className="my-1.5">
        <a href='\' className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer">Learn More...</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
