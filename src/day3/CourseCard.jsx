const CourseCard = ({ courseName, duration, fees }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center mb-4">Interview-Oriented Task</h1>
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">
        Course Details
      </h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Course Name:</span> {courseName}</p>
        <p><span className="font-semibold">Duration:</span> {duration}</p>
        <p><span className="font-semibold">Fees:</span> ₹{fees}</p>
      </div>
    </div>
  );
};

export default CourseCard;