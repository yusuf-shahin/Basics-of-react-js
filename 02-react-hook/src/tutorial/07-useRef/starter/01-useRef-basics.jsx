import { useEffect, useRef, useState } from "react"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)

  const refContainer = useRef(null)
  console.log(refContainer) //# {current: null}

  //? userRef() contain a obj , which have a only one propery. That is current

  useEffect(() => {
    console.log(refContainer) //# {current: input#name.form-input}
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer}
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  )
}

export default UseRefBasics
