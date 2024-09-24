import CleanupFunction from "./tutorial/02-useEffect/final/05-cleanup-function"
import CodeExample from "./tutorial/02-useEffect/starter/01-code-example"
import MultipleReturnsBasics from "./tutorial/03-conditional-rendering/final/01-multiple-returns-basics"
import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/final/02-multiple-returns-fetch-data"
import ShortCircuitOverview from "./tutorial/03-conditional-rendering/final/04-short-circuit-overview"
import ShortCircuitExamples from "./tutorial/03-conditional-rendering/final/05-short-circuit-examples"
import ToggleChallenge from "./tutorial/03-conditional-rendering/final/06-toggle-challenge"
import UserChallenge from "./tutorial/03-conditional-rendering/final/07-user-challenge"

function App() {
  return (
    <div className='container'>
      {/* <CodeExample /> */}
      {/* <CleanupFunction /> */}
      {/* <MultipleReturnsBasics /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <ShortCircuitOverview /> */}
      {/* <ShortCircuitExamples /> */}
      {/* <ToggleChallenge /> */}
      <UserChallenge />
    </div>
  )
}

// invoke setCount() func inside any function .
// we must set when we invoke useState

export default App
