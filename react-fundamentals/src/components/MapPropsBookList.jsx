const books = [
  {
    author: "Casey Means",
    title: "Good Energy",
    img: "https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL600_SR600,400_.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
  },
];

// function MapPropsBookList() {
//   return (
//     <section className='booklist'>
//       # create new array using book component
//       {books.map((book, index) => {
// book --> obj
//        // destructuring obj inside book array
//         const { img, title, author } = book;
//         return <Book img={img} title={title} author={author} key={index} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author} </h4>
//     </article>
//   );
// };

//! ====================
//? passing object
//! ====================

// function MapPropsBookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//#     create new array using book component
//         console.log(book);
//         return <Book book={book} key={index} />;
//         // here we pass two obj inside array
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   // book is a obj inside props
//   const { img, title, author } = props.book;

//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

//! ====================
//? passing the shallow copy of obj using destructering method
//! ====================

function MapPropsBookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
}

const Book = (props) => {
  // obj inside array
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

export default MapPropsBookList;
