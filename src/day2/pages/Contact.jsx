
const Contact = () => {
  const contactNumber="654-738-76378";
  const academyName="Elite Cricket Academy";
  const address="Loyola Cricket Ground, Nungambakkam, Chennai, Tamil Nadu";
  const email="Virat@gmail.com";
  const headCoach="Virat Kohli";
  const website ="www.virat.com"
  return (
    <div className="bg-blue-400 min-h-screen flex justify-center items-center">
      <div className="bg-amber-700 rounded-lg w-700px p-6 shadow-lg">
        <h1 className="font-bold text-center text-2xl ">Contact</h1>
        <div className="space-y-4 text-lg">
        <p className="font-semibold text-blue-800">Contact Number: 
          <span className="text-blue-100"> {contactNumber}</span>
        </p>
        <p className="font-semibold text-blue-800">Academy Name: <span className="text-blue-100">
          {academyName}</span>
          </p>
        <p className="font-semibold text-blue-800">Address: <span className="text-blue-100">{address}
          </span>
          </p>
          <p className="font-semibold text-blue-800">Email: <span className="text-blue-100">{email}
          </span>
          </p>
          <p className="font-semibold text-blue-800">Head Coach: <span className="text-blue-100">{headCoach}
          </span>
          </p>
          <p className="font-semibold text-blue-800">Website: <span className="text-blue-100">{website}
          </span>
          </p>
    </div>

      </div>
    </div>
  )
}

export default Contact