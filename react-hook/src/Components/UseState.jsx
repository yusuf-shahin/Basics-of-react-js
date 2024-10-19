import React, { useState } from "react"

const UseState = () => {
  // const [count, setCount] = useState(4)

  //* same things
  const [count, setCount] = useState(() => {
    return 0
  })
  const decrementCount = () => {
    // setCount(count - 1)
    setCount((prevCount) => prevCount - 1)
  }

  const incrementCount = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    //// setCount("hello")
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)
    // setCount((prevCount) => prevCount + 1)

    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <button type='button' onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>
      <button type='button' onClick={incrementCount}>
        +
      </button>
    </>
  )
}

export default UseState
