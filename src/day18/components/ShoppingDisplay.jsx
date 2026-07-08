import { useContext } from "react";
import ShoppingContext from "../context/ShoppingContext";

const ShoppingDisplay = () => {
  const { shoppingObj, totalquantity } = useContext(ShoppingContext);

  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Navbar */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>

          <h2 className="text-lg font-semibold">
            Cart ({totalquantity})
          </h2>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Cart Items
          </h2>

          {shoppingObj.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center border-b py-4 hover:bg-gray-100 transition"
            >
              <span className="text-lg font-medium text-gray-800">
                {e.product}
              </span>

              <span className="text-lg font-semibold text-blue-600">
                x {e.qty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingDisplay;