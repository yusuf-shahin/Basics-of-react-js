const author = "Elizabeth Strout";
const title = "Tell Me Everything";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71XX7KlB7HL._AC_UL254_SR254,254_.jpg";

//* pass every value using props
function PropsBookList() {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};

export default PropsBookList;
