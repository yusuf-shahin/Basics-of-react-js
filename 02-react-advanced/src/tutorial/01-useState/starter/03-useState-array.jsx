import { useState } from "react";
import { data, people } from "../../../data";

const UseStateArray = () => {
  const [peoples, setPeoples] = useState(data);

  return (
    <>
      {peoples.map((people) => {
        // people is obj
        const { id, name } = people;
        return (
          <section key={id}>
            <h4>{name}</h4>
            <button type='button'>remove</button>
          </section>
        );
      })}
      <button style={{ marginTop: "1.7rem" }} className='btn'>
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
