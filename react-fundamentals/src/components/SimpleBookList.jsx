//! ================
//? using js in jsx
//! ================

//* create a varible
const author = "Elizabeth Strout";
const title = "Tell Me Everything";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71XX7KlB7HL._AC_UL254_SR254,254_.jpg";

function SimpleBookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  );
}

//? inside curly bracket , must be a expression

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

export default SimpleBookList;
