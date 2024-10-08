import { useState } from "react"

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // setValue((currentState) => {
    //   // must return otherwise undefined
    //   // below is the latest/current state value
    //   const newState = currentState + 1
    //   console.log(newState)
    //   return newState
    // })
    // setTimeout(() => {
    //   console.log("clicked the button")
    //   setValue(value + 1)
    // }, 3000)
    //? correct way
    setTimeout(() => {
      console.log("clicked the button")
      setValue((currentState) => {
        const newState = currentState + 1
        console.log(newState)

        return newState
      })
    }, 3000)
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
