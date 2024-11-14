import React, { useReducer } from "react"
import { useState } from "react"
import { data, people } from "../../../data"

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  //@ here state === previous defaultState
  //@ action === argument of dispatch
  // console.log(action) //# { type: "clear_list" }
  //* here we basically manupulate the "people" array which is situaded "state" object
  if (action.type === "clear_list") return { people: [] } //# {people: Array(0)}
  if (action.type === "reset_list") return { people: data }
  if (action.type === "remove_item") {
    const newThings = state.people.filter(
      (person) => person.id !== action.removeId
    )
    return { people: newThings }

    // console.log(action)
    // return state
  }
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  //! reducer === function && defaultState === object ( which is diclare in upside )
  //@ state === defaultState

  //? action of reducer func implement in dispatch

  //? In dispatch, we pass the argument for reducer function

  // console.log(state) //# we get everything of defaultState varible

  //? In useReducer, we need to pass in two things. We need to pass in a default state.

  //* clear item
  const clearList = () => {
    dispatch({ type: "clear_list" }) //# ==> those are go to the action
    //@ imagine,  action = { type: "clear_list" }
    // setPeople([])
  }

  //* reset item
  const resetList = () => {
    dispatch({ type: "reset_list" })
    //@ imagine action = { type: "reset_list" }
    // setPeople(data)
  }

  //* remove item
  const removeItem = (removeId) => {
    dispatch({ type: "remove_item", removeId })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
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

export default ReducerBasics
