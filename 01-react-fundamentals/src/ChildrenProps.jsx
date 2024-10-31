import React from "react"

const firstBook = {
  author: "Casey Means",
  title: "Good Energy",
  img: "https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL600_SR600,400_.jpg",
}
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
}

function ChildrenProp() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

// const Book = ({ img, title, author, children }) => {
//   // rest of the logic
// }
const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  )
}

export default ChildrenProp
