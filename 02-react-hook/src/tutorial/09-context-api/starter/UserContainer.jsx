import { useContext } from "react"
import { NavbarContext } from "./Navbar"

const UserContainer = () => {
  console.log(useContext)

  // const value = useContext(NavbarContext)
  // console.log(value) //# obj which hold property which gonna pass from

  // const { user, logout } = value
  const { user, logout } = useContext(NavbarContext)

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
