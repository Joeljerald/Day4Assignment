import React from "react";

const Child = ({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={handleClick} className="bg-red-600 text-white px-5 py-2 rounded">
      Child Button
    </button>
  );
};

export default React.memo(Child);