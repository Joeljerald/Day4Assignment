const Employee = ({ employee }) => {
  const { company, name, role, salary } = employee ?? {};

  return (
    <div className="space-y-2">
      <p><span className="font-semibold">Company:</span> {company}</p>
      <p><span className="font-semibold">Name:</span> {name}</p>
      <p><span className="font-semibold">Role:</span> {role}</p>
      <p><span className="font-semibold">Salary:</span> ₹{salary}</p>
    </div>
  );
};

export default Employee;

