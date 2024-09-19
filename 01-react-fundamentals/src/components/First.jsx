//! ===========
//? create a component and render it
//! ===========

function First() {
  return (
    <div>
      <Hello />
      <Name />
    </div>
  );
}

//# starting name of component must be upper case
function Hello() {
  return <h1>Hello world</h1>;
}

function Name() {
  return <h4>My name is yusuf</h4>;
}

// export default First;

//! ============
//? Different subject
//! ============

function Person() {
  // rendering the Book component and pass the Props as key/value pair .
  return (
    <section className='booklist'>
      <Book name='Yusuf' age='27' address='andorkillah' wife='amatullah' />
      <Book name='Nazmul' age='25' address='hazarigoli' num='75765456' />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <h1>Hello , my name is {props.name}</h1>
      <p>I am ,{props.age} years old</p>
      <p>My wife name is {props.wife}</p>
      <p>I live in , {props.address}</p>
      <p>{props.num}</p>
    </article>
  );
};

// export default Person;

//! =============
//? using map mathod to show the value
//! =============

const names = ["john", "peter", "susan"];

//* render the array
// function NameList() {
//   return <section className='booklist'>{names}</section>;
// }

//* MAP method
const newNames = names.map((name) => {
  return <h1 key={Math.random()}>{name}</h1>;
});

function NameList() {
  return <section className='booklist'>{newNames}</section>;

  //   //* same things
  // return (
  //   <section className='booklist'>
  //     {names.map((name) => {
  //       return <h1 key={Math.random()}>{name}</h1>;
  //     })}
  //   </section>
  // );
}

//! ============
//? Without map method
//! ===========

// function NameList() {
//   return (
//     <section className='booklist'>
//       {[<h1>john</h1>, <h1>peter</h1>, <h1>susan</h1>]}
//     </section>
//   );
// }

export default NameList;
