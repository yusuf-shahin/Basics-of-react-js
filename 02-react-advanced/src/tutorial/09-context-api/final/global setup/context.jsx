import { createContext, useContext, useState } from "react"

export const GlovalContext = createContext()
export const glovalNameContext = () => useContext(GlovalContext)

//* jsx

const AppContext = ({ children }) => {
  const [glovalName, setGlovalName] = useState("yusuf")

  return (
    <GlovalContext.Provider value={{ glovalName, setGlovalName }}>
      {children}
    </GlovalContext.Provider>
  )
}

export default AppContext
