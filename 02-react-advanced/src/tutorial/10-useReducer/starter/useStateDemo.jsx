import React from "react"
import { useState } from "react"
import { data } from "../../../data"
const ReducerBasics = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (removeId) => {
    let newPeople = people.filter(({ id }) => id !== removeId)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map(({ id, name }) => {
        // const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {people.length > 0 ? (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={() => setPeople(data)}
        >
          reset items
        </button>
      )}
    </div>
  )
}

// export default ReducerBasics
