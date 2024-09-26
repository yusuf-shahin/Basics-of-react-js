import { useState } from "react"
const UserChallenge = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    //* if no value, nothing happened
    if (!name) return

    //* if value, setup new user and add to current users
    const fakeId = Date.now()
    // console.log(fakeId)

    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name } // ----> name is a state
    //# example :- newUser = {id: 1 , name : "yusuf"}

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers) // ---> complete array
    // [{id: 1 , name : "yusuf"}]
    // user === [{id: 1 , name : "yusuf"}]
    // set back to empty
    setName("")
  }

  //* remove user from array
  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-input'
            id='name'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className='btn'>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
