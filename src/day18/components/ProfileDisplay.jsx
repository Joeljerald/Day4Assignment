import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

const ProfileDisplay = () => {
  const { profileObj } = useContext(ProfileContext);

  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center mx-30 rounded-2xl">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Profile Details
        </h1>

        <div className="space-y-4">
          <div className="border rounded-lg p-3">
            <p className="text-sm text-gray-500">Name</p>
            <h2 className="text-lg font-semibold">{profileObj.name}</h2>
          </div>

          <div className="border rounded-lg p-3">
            <p className="text-sm text-gray-500">Email</p>
            <h2 className="text-lg font-semibold">{profileObj.email}</h2>
          </div>

          <div className="border rounded-lg p-3">
            <p className="text-sm text-gray-500">Role</p>
            <h2 className="text-lg font-semibold">{profileObj.role}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;