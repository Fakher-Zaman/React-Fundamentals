import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./style.css";

// Startup Array
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    price: "$200",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81YYStQvnsL._AC_UL250_SR250,250_.jpg",
    title: "I Love You Like Not Otter",
    author: "Ross Rosner",
    price: "$300",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL250_SR250,250_.jpg",
    title: "If Animal Kissed Good Night",
    author: "Ann Whitford Paul",
    price: "$400",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL250_SR250,250_.jpg",
    title: "Where's Spot",
    author: "Eric Hill",
    price: "$500",
  },

  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/81TMvHnKlwL._AC_UL250_SR250,250_.jpg",
    title: "Guess How Much I Love You",
    author: "Sam McBratney",
    price: "$250",
  },

  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL250_SR250,250_.jpg",
    title: "You're My Little Cuddle Bug",
    author: "Nikola Edwards",
    price: "$480",
  },

  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/811Ex4ttTvL._AC_UL250_SR250,250_.jpg",
    title: "Why a Daughter Needs a Mom",
    author: " Gregory E. Lang",
    price: "$520",
  },

  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/817K85jOeuL._AC_UL250_SR250,250_.jpg",
    title: "Grandma Loves You",
    author: "Danielle McLean",
    price: "$410",
  },

  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/818+E-4tgjL._AC_UL250_SR250,250_.jpg",
    title: "Grandpa And Me",
    author: "Danielle McLean",
    price: "$720",
  },

  {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/81OZqIGVnKL._AC_UL250_SR250,250_.jpg",
    title: "Grandma Loves Me",
    author: "Marianne Richmond",
    price: "$600",
  },
];

// Nested components, React Tools
function BookList() {
  return (
    <>
      <Message />
      <section className="booklist">
        {books.map((book, index) => {
          // return <Book key={book.id} book={book}></Book>;
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </>
  );
}

const Book = ({ img, title, author, price }) => {
  // const { img, title, author, price } = props;  // Props Destructuring
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3> {title} </h3>
      <h4> {author} </h4>
      <h5> {price} </h5>
    </article>
  );
};

const Message = () => {
  return (
    <div
      style={{
        color: "rgb(60 62 67)",
        margin: "auto",
        fontSize: "0.95rem",
        marginTop: "0.25rem",
        textAlign: "center",
      }}
    >
      <h1> Mini Book App </h1>
      <p> Buying and Selling the books from here </p>;
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
