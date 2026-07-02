import Navbar from "../components/Navbar";
import SchoolCart from "../day4/components/SchoolCart";
import Schools from "../day4/components/Schools";
import SchoolStats from "../day4/components/SchoolStats";
const schools = [

  {
    id: 1,
    schoolName: "ABC Matric Higher Secondary School",
    city: "Chennai",

    principal: {
      name: "Ramesh Kumar",
      experience: 15
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Cricket",
      "Football",
      "Basketball"
    ],

    students: 2500,
    teachers: 120
  },

  {
    id: 2,
    schoolName: "Green Valley Public School",
    city: "Coimbatore",

    principal: {
      name: "Priya Sharma",
      experience: 12
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "Middle School"
    ],

    sports: [
      "Kabaddi",
      "Volleyball",
      "Athletics"
    ],

    students: 1800,
    teachers: 85
  },

  {
    id: 3,
    schoolName: "Sunrise International School",
    city: "Madurai",

    principal: {
      name: "Arun Prakash",
      experience: 18
    },

    courses: [
      "Primary",
      "Middle School",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Cricket",
      "Tennis",
      "Swimming"
    ],

    students: 3200,
    teachers: 150
  },

  {
    id: 4,
    schoolName: "Oxford Higher Secondary School",
    city: "Salem",

    principal: {
      name: "Meena Lakshmi",
      experience: 14
    },

    courses: [
      "Primary",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Football",
      "Basketball"
    ],

    students: 2100,
    teachers: 95
  },

  {
    id: 5,
    schoolName: "Future Star Academy",
    city: "Trichy",

    principal: {
      name: "Vignesh Kumar",
      experience: 10
    },

    courses: [
      "LKG",
      "UKG",
      "Primary",
      "Middle School",
      "High School"
    ],

    sports: [
      "Athletics",
      "Cricket",
      "Kho Kho"
    ],

    students: 2800,
    teachers: 130
  },

  {
    id: 6,
    schoolName: "Royal International School",
    city: "Erode",

    principal: {
      name: "Sathya Narayanan",
      experience: 20
    },

    courses: [
      "Primary",
      "Middle School",
      "High School",
      "Higher Secondary"
    ],

    sports: [
      "Tennis",
      "Swimming",
      "Football"
    ],

    students: 3500,
    teachers: 175
  }

];
const Day4 = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-green-200 ">
      <Schools schools={schools}/>
      <SchoolStats schools={schools}/>
      <SchoolCart schools={schools}/>
    </div>

    </>
  )
}

export default Day4