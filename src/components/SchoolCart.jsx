const SchoolCart = ({ schools }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        School Card
      </h1>
        
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {schools.map((school, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{school.schoolName}</h2>
            <div className="mb-2">
              <span className="font-semibold text-gray-600">Principal:</span>{" "}
              <span className="text-gray-800">{school.principal.name}</span></div>
            <div className="mb-4"><span className="font-semibold text-gray-600">City:</span>{" "}
              <span className="text-gray-800">{school.city}</span>
            </div>
            <div>
            <p className="font-semibold text-gray-700 mb-2">Sports</p>
              <div className="flex  gap-2">{school.sports.map((sport, index) => (
                  <span key={index}className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{sport}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SchoolCart;