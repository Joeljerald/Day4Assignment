import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductDisplay = () => {
  const { productObj } = useContext(ProductContext);

  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Product List
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productObj.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {e.title}
              </h2>

              <p className="text-lg font-bold text-green-600">
                ₹{e.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;