import { useState } from "react"

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("")
  // truthy
  const [name, setName] = useState(true)

  const codeExample = text || "hello world"

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy data OR : {text || "hello world"}</h4>
      <h4>Falsy data AND : {text && "hello world"}</h4>
      <h4>Truthy data OR : {name || "hello world"}</h4>
      <h4>Truthy data AND : {name && "hello world"}</h4>
      {codeExample}
    </div>
  )
}
export default ShortCircuitOverview
