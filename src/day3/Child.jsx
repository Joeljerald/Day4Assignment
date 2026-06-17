import GrandChild from "./GrandChild";

const Child = ({ name, course }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Child Component
      </h2>
      <GrandChild name={name} course={course} />
    </div>
  );
};

export default Child;