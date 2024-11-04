import React, { useReducer } from "react"

const PracticeUseReducer = () => {
  //* set the state in here
  const defaultState = 5
  //@ value of defaultState gonna store in state .

  //? default state could be anything. It could be a number, string, boolion, array, object. But most of the time it would be a object

  const reducerFunc = (state, action) => {
    //@ state is come from default state

    // set the condition for action
    // if (action.type === "change_name") {
    //   return "Hello world"
    // }
    // return state + 1 //# (its render every time)
    console.log(`state is = ${state}`)
    // state is changeable

    console.log(`action is = ${action}`)
    // action is not changeable

    return action + state //# (its just render first time )
  }

  const [state, dispatch] = useReducer(reducerFunc, defaultState)

  //? we pass our state value in defaultState varible
  //@ this value will store in state ==> [state]

  //? we control our state by reducerFunc
  //@ the return value of this funtion will store in dispatch ==> [dispatch]

  //* change name func
  // const changeName = () => {
  //  // passing a object
  //   dispatch({ type: "change_name" })
  // }

  // let number = defaultState
  const changeName = () => {
    // dispatch()
    //? it is not necessery to pass any argument in dispatch

    dispatch(1)
    //? argument of dispatch function is store in action of "reducerFunc func" , and it is changeable .
  }

  console.log(`state value outsude = ${state}`)

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
