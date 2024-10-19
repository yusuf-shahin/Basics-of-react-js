import { useEffect, useState } from "react"

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className='btn'>
        toggle component
      </button>
      {toggle && <RenderComponent name='yusuf' />}
    </div>
  )
}

const RenderComponent = ({ name }) => {
  useEffect(() => {
    console.log("hello I am here")
  }, [])
  return <h1> Hello , my name is {name} </h1>
}

export default CleanupFunction
