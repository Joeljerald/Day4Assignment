import { useMemo, useState } from "react";

const calculator = (shoppingData) => {
  console.log("Calculating Total...");

  return shoppingData.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0);
}

const ShoppingMemo = () => {
  const [theme, setTheme] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      quantity: 2,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      quantity: 3,
    },
  ];

  const shopeMemo = useMemo(() => {
    return calculator(cartItems);
  }, [])

  const handleClick = () => {
    setTheme((prev) => !prev);
  }

  return (
    <div
      className={theme ? "min-h-screen bg-slate-900 text-white p-8 transition-all duration-500" : "min-h-screen bg-sky-100 text-gray-900 p-8 transition-all duration-500"}>
      <div className="max-w-5xl mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-4xl font-bold">Shopping Cart Dashboard</h1>

          <button onClick={handleClick} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition">
            Change Theme
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-700"> Grand Total</h2>

          <p className="text-4xl font-bold text-green-600 mt-3">₹ {shopeMemo.toLocaleString()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-indigo-600">
              
              <h2 className="text-2xl font-bold text-indigo-700 mb-4"> {item.name}</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  ₹ {item.price.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
                </p>

                <p>
                  <span className="font-semibold">Subtotal:</span>{" "}
                  <span className="text-green-600 font-bold">
                    ₹ {(item.price * item.quantity).toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShoppingMemo