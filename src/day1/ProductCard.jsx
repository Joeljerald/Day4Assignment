const ProductCard = () => {
  return (
<div className=" bg-blue-500 flex flex-col justify-center items-center">
       <h1 className="text-3xl font-bold text-white mb-6">Task 3</h1>
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-90 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product Card</h1>
        <div className="space-y-4 text-lg ">
          <p><span className="font-bold">Product Name :</span> AC</p>
          <p><span className="font-bold">Product Price :</span> $50</p>
          <p><span className="font-bold">Product Category :</span> Appliances</p>
          <p><span className="font-bold">Product Description :</span> Cooling</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;