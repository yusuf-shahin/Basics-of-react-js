import React, { useEffect, useState } from "react"

const InitialRender = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    setName("Yusuf Shahin")
  }, [])
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default InitialRender
