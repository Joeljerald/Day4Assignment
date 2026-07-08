import ProfileContext from "../context/ProfileContext"

const ProfileProvider = ({children}) => {

    const profileObj={
  name: "Sudhan",
  email: "sudhan@gmail.com",
  role: "Trainer"
}

  return (
    <>
    <ProfileContext.Provider value={{profileObj}}>
        {children}

    </ProfileContext.Provider>
    
    </>
  )
}

export default ProfileProvider