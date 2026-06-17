import { useState } from "react";

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center hover:scale-105">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Profile Visibility</h1>
        <button onClick={handleProfile} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition mb-6">
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
        {showProfile && (
          <div className="text-left space-y-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
            <p><span className="font-semibold">Name:</span> Joel A</p>
            <p><span className="font-semibold">Role:</span> Full Stack Developer</p>
            <p><span className="font-semibold">Age:</span> 22</p>
            <p><span className="font-semibold">Location:</span> Chennai</p>
            <p><span className="font-semibold">Skills:</span>HTML, CSS, JavaScript, React, Java, SQL</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default Profile;