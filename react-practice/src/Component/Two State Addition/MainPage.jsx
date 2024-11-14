import React, { useState } from "react"
import Counter from "./Counter"
import Addition from "./Addition"

const MainPage = () => {
  const stateValue = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]
  // console.log(stateValue[0].value)
  const [countState, setCountState] = useState(stateValue)

  const addition = () => {
    return countState.reduce((total, acc) => {
      return (total += acc.value)
    }, 0)
  }

  return (
    <div>
      {stateValue.map(({ id, value }) => {
        return (
          <Counter
            key={id}
            id={id}
            value={value}
            setCountState={setCountState}
          />
        )
      })}
      {/* <Addition addition={addition} /> */}
    </div>
  )
}

export default MainPage
