import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    },1000)
    return () => clearInterval(timer);
  },[])

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Timer</h1>
        <div className="text-6xl font-bold text-blue-600 mb-6">
          {count}
        </div>
        <p className="text-gray-600">Timer updates every second</p>
      </div>
    </div>
  )
}
export default Timer