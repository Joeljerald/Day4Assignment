import withNumber from "../hoc/withNumber";
import Number from "../components/Number";
import { useState } from "react";

const EnhancedNumber = withNumber(Number);

const NumberMain = () => {
  const [number, setNumber] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="min-h-screen m-40 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Number Generator</h1>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Enter Your Number</label>
          <input type="number" placeholder="Enter Your Number" value={number} onChange={(e) => setNumber(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Enter Your Color</label>

          <input type="text" placeholder="Enter Your Color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"/>
        </div>

        <EnhancedNumber number={number} color={color}/>

      </div>
    </div>
  );
};

export default NumberMain;