```jsx
import { createContext, useContext, useState } from "react"

const GlovalContext = createContext()
export const glovalNameContext = () => useContext(GlovalContext)

//* jsx

const AppContext = ({ children }) => {
  const [glovalName, setGlovalName] = useState("nukba")

  return (
    <GlovalContext.Provider value={{ glovalName, setGlovalName }}>
      {children}
    </GlovalContext.Provider>
  )
}

export default AppContext
```

- Here we create a **AppContext** Component.
- In that **AppContext** component we create a useContext() and store it in a varible .
- `const GlovalContext = createContext()`
- Inside **AppContext** component , we diclare a state .
- `const [glovalName, setGlovalName] = useState("nukba")`
- If we want , we pass that state in every component of project What can we do ?
- ```js
  <GlovalContext.Provider value={{ glovalName, setGlovalName }}>
    {children}
  </GlovalContext.Provider>
  ```
- here we pass all value of **AppContext**

  **Then**

- warp the App.jsx or main by AppContext component.

```jsx
function App() {
  return (
    <AppContext>
      <div className='container'>
        <Navbar />
      </div>
    </AppContext>
  )
}
```

- [who children props work in jsx](https://github.com/yusuf-shahin/Basics-of-react-js/tree/main/01-react-fundamentals#children-prop-side-topic)
- [Video Link](https://www.youtube.com/watch?v=-FRGDF5gCjc)
- We get every component of **App.jsx** as a children inside **AppContext** jsx .
- Any component which inside of **App.jsx**, easily get the state or function of **AppContext** , we just import **glovalNameContext()** and destructure the value .
