import { useState, createContext } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()
console.log(NavbarContext) //# obj which return two things --> 1.Provider , 2. Consumer

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
