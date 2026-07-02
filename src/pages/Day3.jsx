import EmployeeCard from "../day3/EmployeeCard";
import Product from "../day3/Product";
import Skills from "../day3/Skills";
import Student from "../day3/Student";
import User from "../day3/User";
import Company from "../day3/Company";
import Parent from "../day3/Parent";
import CourseCard from "../day3/CourseCard";
import Navbar from "../components/Navbar";

const Day3 = () => {
  const name = "Joel";
  const age = 22;
  const course = "MERN Stack";
  const city = "Chennai";

  const skills = ["HTML", "CSS", "JavaScript", "React", "SQL"];

  const user = {
    name: "Joel",
    email: "joel@gmail.com",
    phone: 9776568824,
    city: "Ramanathapuram",
  };

  const employee = {
    company: "Zoho",
    name: "Joel",
    role: "Web Developer",
    salary: 70000,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Student name={name} age={age} course={course} city={city}/>

        <EmployeeCard name="Joel" id="61" department="CSE" salary="50000" experience="2 Years"/> 

        <Product name="Mobile" price="30000" category="Electronics" brand="One Plus"/>

        <Skills skills={skills} />

        <User user={user} />

        <Company employee={employee} />

        <Parent name="Godson" course="MERN"/>

        <CourseCard courseName="MERN" duration="4 Months" fees={50000}/>

        <CourseCard courseName="Java" duration="3 Months" fees={50000}/>

        <CourseCard courseName="Python" duration="5 Months" fees={60000}/>

      </div>

    </div>
  );
};

export default Day3;