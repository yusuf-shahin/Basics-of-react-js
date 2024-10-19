import { useState } from "react";

function UseStateBasics() {
  console.log(useState()[1]);

  // let count = 0;
  const [count, setCount] = useState(0);

  //* create handleClick func
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button className='btn' onClick={handleClick}>
        Incement
      </button>
    </>
  );
}

// invoke setCount() func inside any function .
// we must set when we invoke useState

export default UseStateBasics;
