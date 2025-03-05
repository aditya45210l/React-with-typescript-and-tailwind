const ProductPage = () => {
  return (
    <div className="shadow border-x-2 border-gray-200 rounded ">
      <div className="w-3/4 flex flex-col items-center mx-auto">
        <img
          src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
          alt=""
          className="max-w-[270px]"
        />

        <div>
          <h3 className="text-3xl font-semibold">
            Essence Mascara Lash Princess
          </h3>
          <p className="text-gray-800 text-sm">
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects. Achieve dramatic lashes with
            this long-lasting and cruelty-free formula
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
