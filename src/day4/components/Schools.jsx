const Schools = ({ schools }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      <section>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Task 1</h1>
            <h2 className="text-lg text-gray-600 mb-6 text-center">School Management</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{schools.map((school, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{school.schoolName}</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">ID:</span>{ school.id}</p>
                <p><span className="font-semibold">City:</span>{ school.city}</p>
                <p><span className="font-semibold">Principal:</span>{ school.principal.name}</p>
                <p><span className="font-semibold">Students:</span>{ school.students}</p>
                <p><span className="font-semibold">Teachers:</span>{ school.teachers}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section>

        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Task 2</h1>

        <h2 className="text-lg text-gray-600 mb-6 text-center">School Courses Dashboard</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {schools.map((school, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold text-green-600 mb-4">{school.schoolName}</h3>
              <div className="flex flex-wrap gap-2">
                {school.courses.map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{course}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Schools;