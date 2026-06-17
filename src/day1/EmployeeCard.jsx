const EmployeeCard = () => {
  return (
<div className=" bg-blue-800 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-white mb-6">Task 2</h1>
      <div className="bg-white shadow-2xl rounded-2xl  p-8 w-90">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Employee Profile</h1>
        <div className="space-y-4 text-lg">
          <p><span className="font-bold">Employee Name:</span> Joel</p>
          <p><span className="font-bold">Employee ID :</span> 22CS077</p>
          <p><span className="font-bold">Department :</span> Developer</p>
          <p><span className="font-bold">Salary :</span> $30</p>
        </div>
      </div>

    </div>
  );
};

export default EmployeeCard;