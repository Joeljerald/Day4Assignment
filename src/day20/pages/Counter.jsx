import useCounter from "../components/useCounter";

const Counter = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =useCounter(0);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center border">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Counter App</h1>

      <h2 className="text-6xl font-bold text-gray-700 mb-8">{count}</h2>

      <div className="flex justify-center gap-3">

        <button onClick={handleIncrement} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition">Increment</button>

        <button onClick={handleDecrement} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">Decrement</button>

        <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition"> Reset</button>
        
      </div>
    </div>
  )
}

export default Counter