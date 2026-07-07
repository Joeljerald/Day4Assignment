import { useRef } from "react";

const Toggle = () => {
  const statusRef = useRef(false);
  const buttonRef = useRef(null);
  const textRef = useRef(null);

  const handleToggle = () => {
    statusRef.current = !statusRef.current;

    if (statusRef.current) {
      buttonRef.current.innerText = "Turn OFF";
      textRef.current.innerText = "Process ON";
    } else {
      buttonRef.current.innerText = "Turn ON";
      textRef.current.innerText = "Process OFF";
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
        Task 3
      </h1>

      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Turn ON
      </button>

      <h2 ref={textRef} className="mt-5 text-xl">Process OFF</h2>
    </div>
  );
};

export default Toggle;