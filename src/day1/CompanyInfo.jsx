const CompanyInfo = () => {
  return (
<div className=" bg-blue-900 flex flex-col justify-center items-center">
       <h1 className="text-3xl font-bold text-white mb-6">Task 5</h1>
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-90 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Company Info</h1>
        <div className="space-y-4 text-lg ">
          <p><span className="font-bold">Company Name :</span> Zoho Corporation</p>
          <p><span className="font-bold">Location :</span> Chennai</p>
          <p><span className="font-bold">Founder :</span> Sridhar Vembu & Tony Thomas</p>
          <p><span className="font-bold">Established Year :</span> 1996</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;