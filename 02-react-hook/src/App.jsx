import UseRefBasics from "./tutorial/07-useRef/starter/01-useRef-basics"
import Navbar from "./tutorial/09-context-api/starter/Navbar"
import ReducerBasics from "./tutorial/10-useReducer/starter/01-useReducer"

function App() {
  return (
    <div className='container'>
      {/* <Navbar /> */}
      <UseRefBasics />
      {/* <ReducerBasics /> */}
    </div>
  )
}

// invoke setCount() func inside any function .
// we must set when we invoke useState

export default App
