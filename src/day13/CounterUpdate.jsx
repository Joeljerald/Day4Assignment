import { useEffect, useState } from "react";

const CounterUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    },1000)

    return () => clearInterval(timer);
  },[])

  useEffect(() => {
    console.log("Count Updated");
  },[count])

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Counter Update</h1>
        <div className="text-6xl font-bold text-blue-600 mb-6">
          {count}
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold cursor-default">Count: {count}</button>
      </div>
    </div>
  )
}

export default CounterUpdate;