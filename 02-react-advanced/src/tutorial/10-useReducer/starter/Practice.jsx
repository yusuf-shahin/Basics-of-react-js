import React, { useReducer } from "react"
import { useState } from "react"
import { data } from "../../../data"

const defaultState = {
  people: data,
  name: "yusuf",
}

const reducer = () => {}

const InitialReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  //! reducer === function && defaultState === object
  //@ state === defaultState

  console.log(state) //# we get everything of defaultState varible

  //? In useReducer, we need to pass in two things. We need to pass in a default state.

  return (
    <div>
      {state.people.map(({ id, name }) => {
        // const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length > 0 ? (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  )
}

// export default InitialReducer
