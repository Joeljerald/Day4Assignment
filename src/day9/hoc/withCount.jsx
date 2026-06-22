import { useState } from "react";

const withCounter = (WrappedComponent) => (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-96 mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg text-center">

      <WrappedComponent {...props} count={count} />
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={handleIncrement} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md">
          Increment
        </button>

        <button onClick={handleDecrement} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default withCounter;