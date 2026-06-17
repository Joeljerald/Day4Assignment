const About = () => {
  const academy = "Elite Cricket Academy";
  const year = 2004;
  const indianPlayer = "Suresh Raina";
  const indiaDebutYear = 2007;
  const location = "Loyola Cricket Ground";
  const isActive = true;

  return (
    <div className="bg-blue-700 min-h-screen p-20">
      <div className="bg-amber-400 rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          <span className="font-bold text-blue-800">{academy}</span>,established in<span className="font-bold text-red-600"> {year}</span> at<span className="font-bold text-green-700"> {location}</span>, hasbeen a trusted destination for young cricketers who dream of building
          a successful career in the sport.The academy provides quality coaching, regular practice sessions, an opportunities for players to participate in competitive tournaments.
          Over the years, the academy has helped many talented players improvetheir batting, bowling, and fielding skills through structuredtraining programs. The coaching staff focuses on discipline,teamwork, fitness, and sportsmanship, ensuring that every player
          develops both on and off the field. One of the academy's proud achievements is nurturing talented players who have gone on to represent higher levels of cricket. Among them,
          <span className="font-bold text-purple-700"> {indianPlayer}</span> trained at the academy before progressing in his cricketing journey.
          His dedication, hard work, and commitment inspired many young players to pursue their goals. After years of consistent performances an determination <span className="font-bold text-purple-700"> {indianPlayer}</span>{" "}
          earned a place in the Indian cricket team in <span className="font-bold text-red-600"> {indiaDebutYear}</span>.
          The academy features well-maintained practice nets and modern training equipment to help players improve their performance. Regular inter-academy matches are organized to provide students with
          valuable match experience and competitive exposure.Fitness sessions and specialized coaching programs are conducted to enhance players' strength, agility, and endurance.
          Several former students of the academy have gone on to represent district, state, and national-level teams. The academy remains committed to identifying young talent and helping
          aspiring cricketers achieve their dreams through dedication and professional guidance.
          Today,<span className="font-bold text-blue-800"> {academy}</span>continues to provide excellent facilities, experienced coaching, and a positive learning environment where aspiring cricketers can develop their skills, build confidence, and work towards achieving success in the game of cricket. </p>

        {isActive ? (
          <div className="mt-6 bg-green-100 border border-green-500 p-4 rounded-lg">
            <h2 className="text-green-700 font-bold text-xl">
              Academy Status: Active 
            </h2>
            <p className="text-green-800">
              Admissions are currently open for  cricketers. Join now
              and start your journey towards becoming a professional player.
            </p>
          </div>
        ) : (
          <div className="mt-6 bg-red-100 border border-red-500 p-4 rounded-lg">
            <h2 className="text-red-700 font-bold text-xl">
              Academy Status: Inactive 
            </h2>
            <p className="text-red-800">
              Admissions are currently closed. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;