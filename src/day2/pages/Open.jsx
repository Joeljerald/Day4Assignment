const Home = () => {
  const academy="Elite Cricket Academy";
    const year=2004;
    const student=200;
    const coaches=20;
    const isOpen=true;

  return (
  
    <div className="min-h-screen p-10 bg-blue-400">
      <div className="bg-amber-400 p-8 rounded-2xl   ">
      <h1 className="text-5xl text-center font-bold mb-6">Welcome to {academy}</h1>
      <p className=" justify-centertext-lg text-gray-700  leading-8">
        Welcome to <span className="font-bold text-blue-800">{academy}</span>, a
  premier cricket training institution dedicated to shaping the next generation
  of cricketing talent. Located at Chennai our academy has been providing professional coaching and quality training since <span className="font-bold text-red-600">{year}</span>.
  We believe that every aspiring cricketer deserves the opportunity to learn,
  grow, and excel in the sport. Our experienced coaches focus on developing
  technical skills, physical fitness, mental strength, and teamwork through
  structured training programs and competitive match experience.
   With over <span className="font-bold text-purple-700"> {student}</span> trainedplayers and <span className="font-bold text-orange-700"> {coaches}</span>{" "} experienced coaches, the academy provides world-class coaching, fitness training, and match exposure.
  At Elite Cricket Academy, players are encouraged to push their limits and
  strive for excellence both on and off the field. With modern facilities,
  dedicated coaching staff, and a passion for nurturing young talent, we create
  an environment where future champions can thrive.
  Whether you are a beginner learning the fundamentals or an advanced player
  aiming for professional cricket, our academy provides the guidance and support
  needed to achieve your goals. Join us and become part of a cricketing family
  that values discipline, determination, and success.
</p>
 

    {isOpen?(<div className=" bg-green-100 border border-green-500 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-green-600 ">Admission Open</h3> 
      <p >Join the Elite Cricket Academy today and begin your journey</p>
      </div>):(<div>
      <h3>Admission Closed</h3> 
      <p>Admission is Closed</p>
      </div>)}
        <div className="flex justify-evenly items-center mt-10">
  <div className="bg-white w-48 h-32 rounded-xl shadow-lg flex flex-col justify-center items-center hover:scale-105 ">
    <h2 className="text-4xl font-bold text-blue-600">200+</h2>
    <p className="text-gray-600">Trained Students</p>
  </div>

  <div className="bg-white w-48 h-32 rounded-xl shadow-lg flex flex-col justify-center items-center hover:scale-105 ">
    <h2 className="text-4xl font-bold text-green-600">20+</h2>
    <p className="text-gray-600">Expert Coaches</p>
  </div>

  <div className="bg-white w-48 h-32 rounded-xl shadow-lg flex flex-col justify-center items-center hover:scale-105 ">
    <h2 className="text-4xl font-bold text-red-600">50+</h2>
    <p className="text-gray-600">Tournaments</p>
  </div>

  <div className="bg-white w-48 h-32 rounded-xl shadow-lg flex flex-col justify-center items-center hover:scale-105 ">
    <h2 className="text-4xl font-bold text-purple-600">22</h2>
    <p className="text-gray-600">Years Experience</p>
  </div>
</div>
        </div>
    </div>
  )
}
export default Home
