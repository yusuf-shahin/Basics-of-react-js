import React, { useState } from "react"

const Counter = ({ value, id }) => {
  const increment = (ids) => {
    if ((ids = id)) {
      value += 1
    }
  }
  return (
    <>
      <p>{value}</p>
      <button onClick={() => increment(id)}>Click</button>
    </>
  )
}

export default Counter
