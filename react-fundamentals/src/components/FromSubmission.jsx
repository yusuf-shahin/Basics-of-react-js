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

function FromSubmission() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e);
    // e.target - element
    // console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: "1rem .5rem 1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type='submit' onClick={handleFormSubmission}>
          submit form
        </button>
      </form>
      {/* alart btn */}
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

export default FromSubmission;
