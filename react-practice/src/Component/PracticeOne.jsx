import React, { useState } from "react"

const PracticeOne = () => {
  const [nameOne, setNameOne] = useState(["html", "css", "javascript"])
  const [nameTwo, setNameTwo] = useState("Rabi Shasriy")
  const [nameThree, setNameThree] = useState("")
  const handleClick = () => {
    // setNameOne(nameTwo)
    // setNameTwo(nameOne)
    setNameTwo((p) => {
      return nameOne
    })
    setNameThree(nameTwo + " " + "is the end")
    
    console.log(nameOne)
  }
  return (
    <div className='header'>
      {/* <h3>{nameOne}</h3> */}
      <input
        type='text'
        onChange={(e) => {
          setNameOne(e.target.value)
        }}
      />
      <h3>{nameTwo}</h3>
      <h3>{nameThree}</h3>
      <button onClick={handleClick}>Click this</button>
    </div>
  )
}

export default PracticeOne
