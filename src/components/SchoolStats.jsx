const SchoolStats = ({schools}) => {
    let totalSchools=schools.length;
    let totalStudents=0;
    let totalTeachers=0;
    for(let val of schools){
        totalStudents+=val.students;
        totalTeachers+=val.teachers
    }
    return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Task 3</h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6"> School Stats</h2>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Total Schools</span>
            <span className="font-bold text-gray-800">{totalSchools}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Total Students</span>
            <span className="font-bold text-gray-800">{totalStudents}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Total Teachers</span>
            <span className="font-bold text-gray-800">{totalTeachers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolStats