import { useRef } from "react";

const Toggle = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  const handleToggle = () => {
    if (buttonRef.current.innerText === "Turn ON") {
      buttonRef.current.innerText = "Turn OFF";
      textRef.current.innerText = "Process ON";
    } 
    else {
      buttonRef.current.innerText = "Turn ON";
      textRef.current.innerText = "Process OFF";
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Task 3</h1>
        <button ref={buttonRef} onClick={handleToggle} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Turn ON
        </button>

        <h2 ref={textRef} className="mt-6 text-2xl font-semibold text-gray-700" >Process OFF</h2>

      </div>
    </div>
  );
};

export default Toggle;