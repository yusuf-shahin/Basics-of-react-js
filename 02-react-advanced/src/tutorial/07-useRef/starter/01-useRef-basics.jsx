import { useEffect, useRef, useState } from "react"
import { glovalNameContext } from "../../09-context-api/final/global setup/AppContext"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)

  const { glovalName } = glovalNameContext()
  console.log(glovalName)

  const refContainer = useRef(null)
  console.log(refContainer) //# {current: null}

  //? userRef() contain a obj , which have a only one propery. That is current

  useEffect(() => {
    // console.log(refContainer) //# {current: input#name.form-input}
    // console.log(refContainer.current.innerText)
  })

  // start

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const innerValue = refContainer.current.value
    setName(innerValue)
    // console.log(name)
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
            className='form-input'
            ref={refContainer}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h3>Hello , my name is {name}</h3>
      {/* <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button> */}
      {/* <h1 ref={refContainer}>Hello world</h1> */}
      {/* <button
        className='btn'
        onClick={() => {
          // refContainer.current.textContent = "My name is Shahin"
          // const innerMessage = refContainer.current
          // innerMessage.textContent = "My name is Yusuf"
        }}
      >
        change
      </button> */}
    </div>
  )
  // return (
  //   <div>
  //     <h1 ref={refContainer}>Hello world</h1>
  //     <button className='btn' onClick={() => console.log(refContainer)}>
  //       change
  //     </button>
  //   </div>
  // )
}

export default UseRefBasics
