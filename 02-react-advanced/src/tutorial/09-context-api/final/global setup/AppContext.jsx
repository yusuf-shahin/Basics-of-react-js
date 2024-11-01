import { createContext, useContext, useState } from "react"

const GlovalContext = createContext()
export const glovalNameContext = () => useContext(GlovalContext)

//? Here we warp the App.jsx by AppContext component. We get the all thing as a children of AppContext.jsx . So, we dont need to export of GlovalContext function.

//* jsx

const AppContext = ({ children }) => {
  const [glovalName, setGlovalName] = useState("nukba")

  return (
    <GlovalContext.Provider value={{ glovalName, setGlovalName }}>
      {children}
    </GlovalContext.Provider>
  )
}

export default AppContext
