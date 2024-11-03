import React, { useReducer } from "react"
import { useState } from "react"
import { data, people } from "../../../data"

const defaultState = {
  people: data,
  name: "yusuf",
}

const reducer = (abc, action) => {
  //@ here state === previous defaultState
  //@ action to set the condition
  console.log(action) //# { type: "clear_list" }

  if (action.type === "clear_list") {
    return { ...abc, people: [] } //# {people: Array(0), name: 'yusuf'}
  }
}

const ReducerBasics = () => {
  const [abc, dispatch] = useReducer(reducer, defaultState)
  //! reducer === function && defaultState === object
  //@ state === defaultState

  console.log(abc) //# we get everything of defaultState varible

  //? In useReducer, we need to pass in two things. We need to pass in a default state.

  const removeItem = (removeId) => {
    // let newPeople = people.filter(({ id }) => id !== removeId)
    // setPeople(newPeople)
  }

  const clearList = () => {
    dispatch({ type: "clear_list" }) //# ==> those are go to the action
    // setPeople([])
  }

  const resetList = () => {
    // setPeople(data)
  }

  return (
    <div>
      {abc.people.map(({ id, name }) => {
        // const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {abc.people.length > 0 ? (
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

export default ReducerBasics
