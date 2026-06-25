
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-800 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold">Elite Cricket Academy</h1>
        <p className="mt-5 text-lg max-w-3xl mx-auto">
          Train with experienced coaches, improve your cricket skills,
          and become a confident player through professional coaching
          programs designed for beginners and advanced athletes.
        </p> 
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Academy Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-3"> Professional Coaching</h3>
            <p className="text-gray-600 leading-7">
              Learn from certified coaches with years of experience in
              professional cricket. Our training focuses on batting,
              bowling, fielding, and match strategies.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Modern Practice Facilities</h3>
            <p className="text-gray-600 leading-7">
              Practice on well-maintained grounds with quality pitches,
              bowling machines, fitness equipment, and dedicated net
              practice sessions.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Tournament Opportunities</h3>
            <p className="text-gray-600 leading-7">
              Participate in local and state-level tournaments to gain
              match experience and showcase your cricket talent.
            </p>
          </div>

        </div>

        <div className="bg-white shadow rounded-xl p-8 mt-10">
            <h2 className="text-3xl font-bold text-green-700 mb-5">About Our Academy</h2>
          <p className="text-gray-600 leading-8 text-justify">
            Champions Cricket Academy is dedicated to developing talented
            cricketers through structured coaching programs, physical
            fitness sessions, and competitive match practice. Our mission
            is to nurture discipline, teamwork, and sportsmanship while
            helping every player achieve their highest potential.
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomePage;