import { useState } from "react"

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("")
  // truthy
  const [name, setName] = useState("susan")
  const [user, setUser] = useState({ name: "Yusuf" })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {/* content inside element --> render "default value" */}
      <h2>{text || "default value"}</h2>
      {/* toggle element --> render noathing */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below --> render <h4>also works</h4> */}
      {!text && <h4>also works</h4>}
      {/* toggle component --> render component */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      {/* inside element --> btn name */}
      <button className='btn'>{isEditing ? "edit" : "add"}</button>
      {/* toggle components ternaey operator */}
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className='btn'>log out</button>
    </div>
  )
}
export default ShortCircuitExamples
