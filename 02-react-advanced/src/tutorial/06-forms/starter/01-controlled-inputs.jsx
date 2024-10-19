import { useState } from "react"

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
    setName("")
    setEmail("")
  }

  return (
    <form className='form'>
      <h4>Controll Input</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          id='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} className='btn btn-block' type='submit'>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
