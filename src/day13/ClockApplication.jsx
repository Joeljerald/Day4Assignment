import { useEffect, useState } from "react";

const ClockApplication = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    },1000)

    return () => clearInterval(timer);
  },[])

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Digital Clock</h1>
        <div className="bg-slate-900 text-green-400 text-5xl font-mono py-6 rounded-xl shadow-inner">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default ClockApplication;