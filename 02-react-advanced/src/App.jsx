import UseRefBasics from "./tutorial/07-useRef/starter/01-useRef-basics"
import AppContext from "./tutorial/09-context-api/final/global setup/AppContext"
import Navbar from "./tutorial/09-context-api/starter/Navbar"
import ReducerBasics from "./tutorial/10-useReducer/starter/01-useReducer"
import PracticeUseReducer from "./tutorial/10-useReducer/starter/PracticeUseReducer"

function App() {
  return (
    <AppContext>
      <div className='container'>
        <ReducerBasics />
        {/* <PracticeUseReducer /> */}
        {/* <Navbar /> */}
        {/* <UseRefBasics /> */}
        {/* <ReducerBasics /> */}
      </div>
    </AppContext>
  )
}

//! parent component k child component dia wrap kore disi.

// invoke setCount() func inside any function .
// we must set when we invoke useState

export default App

//! context API gloval setup

// <AppContext>
//    <GlovalContext.Provider value={{ glovalName, setGlovalName }}>
//      <div className='container'>
//         {children}
//         {/* <Navbar /> */}
//         <UseRefBasics />
//       {/* <ReducerBasics /> */}
//      </div>
//    </GlovalContext.Provider>
// </AppContext>

//? inside AppContext component we get everything as children. So we pass those children in our AppContext component.
