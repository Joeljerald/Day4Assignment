import useFetch from "../components/useFetch";

const Fetch = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products")

  if (loading) {
    return (
      <h1 className="text-3xl font-bold text-center mt-10">Loading...</h1>
    )
  }

  if (error) {
    return (
      <h1 className="text-3xl text-red-600 text-center mt-10">{error}</h1>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10"> Product List </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.products.map((e) => (
          <div key={e.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

            <img src={e.thumbnail} alt={e.title} className="w-full h-52 object-cover rounded-lg mb-4"/>

            <h2 className="text-2xl font-bold text-slate-700 mb-3">{e.title}</h2>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {e.category}
            </p>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Price:</span> ${e.price}
            </p>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Rating:</span>  {e.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fetch