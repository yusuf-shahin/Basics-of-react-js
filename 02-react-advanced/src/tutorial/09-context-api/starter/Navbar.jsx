import { useState, createContext, useContext } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()
// we must export this , coz we use it inside useContext
console.log(NavbarContext) //# obj which return two things --> 1.Provider , 2. Consumer

export const useAppContext = () => useContext(NavbarContext)

// console.log(useAppContext)

//! here we basically export two things, first "useAppContext" and "NavbarContext"

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      {/*//! here the props name always be value  */}
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
