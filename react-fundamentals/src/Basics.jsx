import "./index.css";

//! ===========
//? create a component and render it
//! ===========

function Show() {
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

//! What is component ?
//? It just piece of code. It follow the jsx method. Here we write HTML and javascript together .

//? In

// export default Show;

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://images-na.ssl-images-amazon.com/images/I/71XX7KlB7HL._AC_UL254_SR254,254_.jpg'
//     alt='Tell Me Everything'
//   />
// );
// const Title = () => {
//   return <h2>Tell Me Everything</h2>;
// };
// const Author = () => <h4>Elizabeth Strout</h4>;

//! ================
//? same things on different way
//! ================

//* create a varible
const author = "Elizabeth Strout";
const title = "Tell Me Everything";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71XX7KlB7HL._AC_UL254_SR254,254_.jpg";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  );
}

//? inside curly bracket , must be a expression

const Book = (props) => {
  console.log(props); //# {} --> empty object
  //# when we render the component , we provide the propes . It basically the value dynamically.

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

export default BookList;
