import { createContext } from "react"
import { useContext } from "react"
import { useState } from "react"
// component
import NavLinks from "./NavLinks"

export const NavbarContext = createContext()

//? here we warp the jsx by NavbarContext . so we must export it

// custom hook
export const useAppContext = () => useContext(NavbarContext)

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

// ==============
//@ UserContainer.jsx
// ==============

// import { useState, createContext } from "react"
// import NavLinks from "./NavLinks"

// // export this to UserContainer.jsx
// export const NavbarContext = createContext()
// console.log(NavbarContext) //# obj which return two things --> 1  Provider , 2. Consumer

// const Navbar = () => {
//   const [user, setUser] = useState({ name: "bob" })
//   const logout = () => {
//     setUser(null)
//   }

//   return (
//     <NavbarContext.Provider value={{ user, logout }}>
//       <nav className='navbar'>
//         <h5>CONTEXT API</h5>
//         <NavLinks />
//       </nav>
//     </NavbarContext.Provider>
//   )
// }

// export default Navbar
