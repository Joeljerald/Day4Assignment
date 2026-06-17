import Employee from "./Employee";

const Company = ({ employee }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      
      <h2 className="text-xl font-semibold mb-4">
        Company Details
      </h2>
      <Employee employee={employee} />
    </div>
  );
};

export default Company;