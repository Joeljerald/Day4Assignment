const MovieDetails = () => {
  return (
<div className=" bg-blue-700 flex flex-col justify-center items-center">
       <h1 className="text-3xl font-bold text-white mb-6">Task 4</h1>
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-90 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product Card</h1>
        <div className="space-y-4 text-lg ">
          <p><span className="font-bold">Movie Name :</span> Leo</p>
          <p><span className="font-bold">Hero Name :</span> Vijay</p>
          <p><span className="font-bold">Director Name :</span> Dharani</p>
          <p><span className="font-bold">Release Year :</span> 2004</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;