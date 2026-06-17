const Product = ({ name, price, category, brand }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm">

      <h1 className="text-2xl font-bold text-center mb-4">Task - 3</h1>
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">Product Details</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Price:</span> ₹{price}</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Brand:</span> {brand}</p>
      </div>

    </div>
  );
};

export default Product;