const Text = ({ text }) => {
  return (
    <div className="w-96 mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold">Enter Your Text :</h1>
      <p className="mt-4 text-xl text-gray-700">{text}</p>
    </div>
  );
};

export default Text;