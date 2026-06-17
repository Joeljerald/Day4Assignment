import { useState } from "react";

const BankBalance = () => {
  const [balance, setBalance] = useState(10000);

  const handleDeposit = () => {
    setBalance((prev) => prev + 1000);
  };

  const handleWithdraw = () => {
    setBalance((prev) => (prev > 0 ? prev - 1000 : 0));
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Bank Balance</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">₹{balance}</h2>
        <div className="flex justify-center gap-4">
          <button  onClick={handleDeposit}className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition">Deposit</button>
          <button onClick={handleWithdraw} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition">Withdraw</button>
        </div>

      </div>

    </div>
  );
};

export default BankBalance;