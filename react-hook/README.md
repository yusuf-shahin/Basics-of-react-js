## All Hooks in React js

- useState Hook
- useEffect Hook

### useState hook

**Create a basic count function using useState hook**

```jsx
const UseState = () => {
  const [count, setCount] = useState(4)
  const decrementCount = () => {
    setCount(count - 1)
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button type='button' onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>
      <button type='button' onClick={incrementCount}>
        +
      </button>
    </>
  )
}

export default UseState
```

**_But this is a incorrec way to update the value_**

- `setCount(count + 1)`

```jsx
const incrementCount = () => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}
```

- here if we click the button, every time it increase by 1 .
  **Why this happen ?**

  - in setCount() , count = 4
  - here 4 + 1 = 5 , 4 + 1 = 5 and 4 + 1 = 5
  - its basically over write with each other and render the last `setCount(count + 1)` function .

**setCount** function basically provides a parameter . Which is always indicate the **previous state** , like that :-

```js
setCount((previousCount) => {
  return previousCount + 1
})
```

So do the same thing in that way -

```jsx
const incrementCount = () => {
  setCount((prevCount) => prevCount + 1)
  setCount((prevCount) => prevCount + 1)
  setCount((prevCount) => prevCount + 1)
}
```

- here previous state is gonna pass by parameter .

##### There is Two way to passing the state using useState :-

- general version **derectly pass the value inside useState()**

```jsx
useState(4)
// 4 is value
```

or

```jsx
const initialCount = () => {
  console.log("run function")
  return 4
}
// value of initialCount func is 4

useState(initialCount())
// here derectly pass the value of initialCount finction
```

- function version **pass a callBack function inside useState()**

```jsx
useState(() => {
  console.log("run function")
  return 4
})
```

or

```jsx
const initialCount = () => {
  console.log("run function")
  return 4
}
useState(initialCount)
```
