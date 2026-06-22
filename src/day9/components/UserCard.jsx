const UserCard = ({ role, name }) => {
  return (
    <div className="w-80 mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-3">Name : {name}</h1>
      <h2 className="text-xl font-semibold text-gray-700">Role : {role}</h2>
    </div>
  );
};

export default UserCard;