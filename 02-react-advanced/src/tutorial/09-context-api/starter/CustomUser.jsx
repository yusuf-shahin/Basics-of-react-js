// import { useAppContext } from "./Navbar"
const CustomUser = () => {
  //@ useAppContext() function return the value
  const { user, logout } = useAppContext()
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
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
export default CustomUser
