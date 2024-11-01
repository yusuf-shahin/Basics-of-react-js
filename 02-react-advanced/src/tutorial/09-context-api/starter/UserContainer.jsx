import { useContext } from "react"
import { NavbarContext } from "./Navbar"

const UserContainer = () => {
  // console.log(NavbarContext.Provider.value)
  const abc = useContext(NavbarContext)
  // console.log(useContext(NavbarContext))

  // console.log(abc) //# obj which hold property which gonna pass from NAvbar.jsx

  const { user, logout } = abc
  // const { user, logout } = useAppContext()

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name} </p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}
export default UserContainer
