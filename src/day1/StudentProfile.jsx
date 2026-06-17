const StudentCard = () => {
  return (
<div className=" bg-blue-300 flex flex-col justify-center items-center">
       <h1 className="text-3xl font-bold text-white mb-6">Task 1</h1>
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-90 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Student Card</h1>
        <div className="space-y-4 text-lg ">
          <p><span className="font-bold">Student Name :</span> Joel</p>
          <p><span className="font-bold">Course :</span> MERN</p>
          <p><span className="font-bold">City :</span> Chennai </p>
          <p><span className="font-bold">Institute :</span>SLA</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;