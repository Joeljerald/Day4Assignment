import { useRef } from "react";

const InputDisplay = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const displayRef1 = useRef(null);
  const displayRef2 = useRef(null);
  const displayRef3 = useRef(null);
  const displayRef4 = useRef(null);

  const handleChange = () => {
    const data1 = inputRef1.current.value;
    const data2 = inputRef2.current.value;
    const data3 = inputRef3.current.value;
    const data4 = inputRef4.current.value;

    displayRef1.current.innerText = data1;
    displayRef2.current.innerText = data2;
    displayRef3.current.innerText = data3;
    displayRef4.current.innerText = data4;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Task 1
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Input Section */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter Name"
              ref={inputRef1}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Enter Age"
              ref={inputRef2}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Enter Email"
              ref={inputRef3}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              placeholder="Enter Place"
              ref={inputRef4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Display Section */}
          <div className="bg-gray-100 rounded-xl p-6 space-y-4 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              User Details
            </h2>

            <p className="text-lg">
              <span className="font-semibold">Name:</span>{" "}
              <span ref={displayRef1}></span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Age:</span>{" "}
              <span ref={displayRef2}></span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Email:</span>{" "}
              <span ref={displayRef3}></span>
            </p>

            <p className="text-lg">
              <span className="font-semibold">Place:</span>{" "}
              <span ref={displayRef4}></span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InputDisplay;