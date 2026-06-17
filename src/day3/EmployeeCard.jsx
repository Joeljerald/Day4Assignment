const EmployeeCard = ({
  name,
  id,
  department,
  salary,
  experience,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center mb-4">Task - 2</h1>
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">Employee Details</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">ID:</span> {id} </p>
        <p><span className="font-semibold">Department:</span> {department}</p>
        <p><span className="font-semibold">Salary:</span> ₹{salary}</p>
        <p><span className="font-semibold">Experience:</span> {experience}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;