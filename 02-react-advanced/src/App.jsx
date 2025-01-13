import MultipleInputs from "./tutorial/06-forms/final/03-multiple-inputs"
import ControlledInputs from "./tutorial/06-forms/starter/01-controlled-inputs"
import UserChallenge from "./tutorial/06-forms/starter/02-user-challenge"
import UseRefBasics from "./tutorial/07-useRef/starter/01-useRef-basics"
import AppContext from "./tutorial/09-context-api/final/global setup/AppContext"
import Navbar from "./tutorial/09-context-api/starter/Navbar"
import ReducerBasics from "./tutorial/10-useReducer/starter/01-useReducer"
import PracticeUseReducer from "./tutorial/10-useReducer/starter/PracticeUseReducer"

function App() {
  return (
    <AppContext>
      <div className='container'>
        {/* <ReducerBasics /> */}
        {/* <PracticeUseReducer /> */}
        {/* <Navbar /> */}
        {/* <UseRefBasics /> */}
        {/* <ReducerBasics /> */}
        {/* <ControlledInputs /> */}
        {/* <UserChallenge /> */}
        <MultipleInputs />
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
