import CustomUser from "./CustomUser"
import UserContainer from "./UserContainer"

const NavLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer />
      {/* <CustomUser /> */}
    </div>
  )
}
export default NavLinks
