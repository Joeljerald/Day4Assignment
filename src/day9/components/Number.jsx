const Number = ({ number, color }) => {
  return (
    <div className="w-80 mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Number List</h1>
      <div className="space-y-3">
        {number.map((num) => (
          <h2 key={num} style={{ color }} className="text-xl font-semibold border p-3 rounded-lg text-center">Number : {num}</h2>
        ))}
      </div>
    </div>
  );
};

export default Number;