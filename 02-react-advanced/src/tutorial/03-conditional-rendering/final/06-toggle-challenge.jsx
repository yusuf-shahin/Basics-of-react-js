import { useState } from "react"

// showing something or empty the component
const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  // render a component or not
  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>
}
export default ToggleChallenge
