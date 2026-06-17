import Child from "./Child";

const Parent = ({ name, course }) => {
  return (
    <>
    <div>
      <Child name={name}course={course}/>
    </div>

    </>
  );
};

export default Parent;