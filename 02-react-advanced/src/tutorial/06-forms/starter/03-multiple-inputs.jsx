import { useState } from "react"

const MultipleInputs = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.value)
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  // const state = {}

  // const setState = (key, value) => {
  //   state[key] = value
  // }

  // setState("id", 1234)
  // setState("name", "Yusuf")
  // setState("job", "vaegabond")

  // console.log(state)

  // output
  // { id: 1234, name: 'Yusuf', job: 'vaegabond' }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users)
    setUsers("")
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={users.name}
            onChange={handleChange}
            name='name'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={users.email}
            onChange={handleChange}
            name='email'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={users.password}
            onChange={handleChange}
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default MultipleInputs
