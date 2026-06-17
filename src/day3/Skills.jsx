const Skills = ({ skills }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm">

      <h1 className="text-2xl font-bold text-center mb-4">Task - 4</h1>

      <h2 className="text-xl font-semibold border-b pb-2 mb-4">Skills</h2>

      <ul className="space-y-2 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;