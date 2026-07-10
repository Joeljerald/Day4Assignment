import useSearch from "../components/useSearch";

const Search = () => {
  const { search, error, loading, handleChange } = useSearch("https://dummyjson.com/users")

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
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Student Search</h1>

        <div className="flex justify-center mb-8">
          <input type="text" placeholder="Search Student..." onChange={handleChange} className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        {search.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border px-4 py-3">ID</th>
                  <th className="border px-4 py-3">First Name</th>
                  <th className="border px-4 py-3">Last Name</th>
                  <th className="border px-4 py-3">Maiden Name</th>
                  <th className="border px-4 py-3">Email</th>
                </tr>
              </thead>

              <tbody>
                {search.map((student) => (
                  <tr key={student.id} className="text-center hover:bg-slate-100">
                    <td className="border px-4 py-3">{student.id}</td>
                    <td className="border px-4 py-3">{student.firstName}</td>
                    <td className="border px-4 py-3">{student.lastName}</td>
                    <td className="border px-4 py-3">{student.maidenName}</td>
                    <td className="border px-4 py-3">{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="text-center text-red-600 text-2xl font-semibold mt-8">No Student Found</h2>
        )}
      </div>
    </div>
  )
}

export default Search