import DashboardContext from "../context/DashboardContext"

const DashboardProvider = ({children}) => {
    const dashboardObj={
  totalStudents: 250,
  totalCourses: 15,
  totalPlacements: 120
}
  return (
    <DashboardContext.Provider value={{dashboardObj}}>
        {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider