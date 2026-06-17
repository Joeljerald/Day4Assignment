const User = ({ user }) => {
  const { name, email, phone, city } = user;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm">

      <h1 className="text-2xl font-bold text-center mb-4">Task - 5</h1>
      <h2 className="text-xl font-semibold border-b pb-2 mb-4">User Details</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">City:</span> {city}</p>
      </div>
    </div>
  );
};

export default User;