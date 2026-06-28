const HomeSpl = () => {
  return (
    <div className="space-y-10">

     
      <div className="bg-white rounded-2xl shadow-lg p-10 border">
        <h1 className="text-4xl font-bold text-violet-700 mb-4">
          Welcome to Different Types of Forms
        </h1>

        <p className="text-gray-600 text-lg leading-8">
          This application demonstrates different real-world registration
          and management forms developed using <span className="font-semibold">React.js</span>,
          <span className="font-semibold"> Tailwind CSS</span>, and
          <span className="font-semibold"> Local Storage</span>.
          Every form stores data in the browser, validates user input,
          prevents duplicate records where necessary, and displays saved
          information dynamically.
        </p>
      </div>


      <div className="bg-white rounded-2xl shadow-lg p-8 border">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          About This Project
        </h2>

        <p className="text-gray-700 leading-8">
          This project is designed to understand how forms work in React.
          Each module demonstrates form handling using controlled components,
          React state management, Local Storage, validation, and CRUD
          operations like Add and Delete. It also provides a responsive
          user interface using Tailwind CSS.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Available Forms
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Book Management
            </h3>
            <p className="text-gray-600">
              Add books with author name and price. View and delete books
              stored in Local Storage.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Contact Book
            </h3>
            <p className="text-gray-600">
              Save contacts with name, email, and phone number while
              preventing duplicate entries.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
               Course Enrollment
            </h3>
            <p className="text-gray-600">
              Register students into different courses and maintain course
              records.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
               Employee Management
            </h3>
            <p className="text-gray-600">
              Manage employee details including ID, department, and salary.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Job Application
            </h3>
            <p className="text-gray-600">
              Store candidate information with skills and experience for
              recruitment purposes.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Patient Registration
            </h3>
            <p className="text-gray-600">
              Register patients with doctor details and maintain hospital
              records.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Product Management
            </h3>
            <p className="text-gray-600">
              Manage products including category, brand, and pricing.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
               Student Registration
            </h3>
            <p className="text-gray-600">
              Register students with age, course, and city details using
              validation.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
               User Registration
            </h3>
            <p className="text-gray-600">
              Create user accounts with email validation to avoid duplicate
              registrations.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Vehicle Registration
            </h3>
            <p className="text-gray-600">
              Register vehicles with owner details and unique vehicle
              numbers.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Technologies Used
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Frontend</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>React.js</li>
              <li>React Router DOM</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Concepts Used</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>useState Hook</li>
              <li>Controlled Forms</li>
              <li>Local Storage</li>
              <li>Form Validation</li>
              <li>CRUD Operations</li>
              <li>Responsive Design</li>
            </ul>
          </div>

        </div>
      </div>

  
      <div className="bg-violet-700 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Form Management System
        </h2>

        <p>
          A React.js project demonstrating multiple real-world forms with
          Local Storage, validation, responsive UI, and CRUD operations.
        </p>
      </div>

    </div>
  )
}

export default HomeSpl;