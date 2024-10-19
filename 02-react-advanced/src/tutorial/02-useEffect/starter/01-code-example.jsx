import { useState, useEffect } from "react"

const CodeExample = () => {
  const [value, setValue] = useState(1)
  const valueShow = () => {
    console.log(`pervious : ${value}`)

    setValue((pValue) => {
      let nValue = pValue * 2
      console.log(`current : ${nValue}`)
      return nValue
    })
  }

  const sayHello = () => {
    console.log("hello world")
  }

  // sayHello() //# every time this function will invoking

  // without dependency array
  // useEffect(() => {
  //   sayHello()
  // })

  // dependency array
  // useEffect(() => {
  //   sayHello()
  // }, [])
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => valueShow()}>
        click me
      </button>
    </div>
  )
}
export default CodeExample
