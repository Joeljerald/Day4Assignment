import { useEffect, useState } from "react";

const Products24 = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300 overflow-hidden"
          >

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="font-bold text-xl mb-2">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

              <p className="text-blue-600 font-bold text-xl">
                ${product.price}
              </p>

              <div className="flex justify-between mt-4 text-sm">

                <span>⭐ {product.rating}</span>

                <span>Stock: {product.stock}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Products24;