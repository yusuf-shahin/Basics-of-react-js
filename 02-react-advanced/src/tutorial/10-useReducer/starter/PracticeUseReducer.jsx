import React, { useReducer } from "react"

const PracticeUseReducer = () => {
  //* set the state in here
  const defaultState = "Yusuf Shahin"
  //@ value of default state gonna store in state .

  //? default state could be anything. It could be a number, string, boolion, array, object. But most of the time it would be a object

  const reducerFunc = (state, action) => {
    // set the condition for action
    if (action.type === "change_name") {
      return "Hello world"
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, defaultState)

  //* change name func
  // const changeName = () => {
  //  // passing a object
  //   dispatch({ type: "change_name" })
  // }

  const type = "change_name"
  const changeName = () => {
    // passing a object
    dispatch({ type })
    // value of dispatch is store im action
  }

  return (
    <>
      <div className='item'>
        <h4>{state}</h4>
      </div>
      <button
        className='btn'
        style={{ marginTop: "2rem" }}
        onClick={changeName}
      >
        Click
      </button>
    </>
  )
}

export default PracticeUseReducer
