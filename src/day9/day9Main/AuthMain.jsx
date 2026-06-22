import { useState } from "react";
import withAuth from "../hoc/withAuth";
import Auth from "../components/Auth";

const HandleAuth = withAuth(Auth);

const AuthMain = () => {
  const [isLogin, setIsLogin] = useState(false);

  const getValue = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">

      <button onClick={getValue} className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transition duration-300 ${isLogin? "bg-red-500 hover:bg-red-600": "bg-green-500 hover:bg-green-600"}`}>
        {isLogin ? "Logout" : "Login"}
      </button>

      <HandleAuth isLogin={isLogin} />

    </div>
  );
};

export default AuthMain;