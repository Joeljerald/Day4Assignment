import StudentContext from "../context/StudentContext"

const StudentProvider = ({children}) => {

    const StudentObj=[
 {
   id:1,
   name:"Sudhan",
   course:"MERN"
 },
 {
   id:2,
   name:"Ravi",
   course:"React"
 }
]

  return (
    <>
    <StudentContext.Provider value={{StudentObj}}>
        {children}
    </StudentContext.Provider>
    </>
  )
}

export default StudentProvider