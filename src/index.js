import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./style.css";

// Setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
  price: "$200",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81YYStQvnsL._AC_UL250_SR250,250_.jpg",
  title: "I Love You Like Not Otter",
  author: "Ross Rosner",
  price: "$300",
};

const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL250_SR250,250_.jpg",
  title: "If Animal Kissed Good Night",
  author: "Ann Whitford Paul",
  price: "$400",
};

const fourthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL250_SR250,250_.jpg",
  title: "Where's Spot",
  author: "Eric Hill",
  price: "$500",
};

const fifthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81TMvHnKlwL._AC_UL250_SR250,250_.jpg",
  title: "Guess How Much I Love You",
  author: "Sam McBratney",
  price: "$250",
};

const sixthBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL250_SR250,250_.jpg",
  title: "You're My Little Cuddle Bug",
  author: "Nikola Edwards",
  price: "$480",
};

const seventhBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/811Ex4ttTvL._AC_UL250_SR250,250_.jpg",
  title: "Why a Daughter Needs a Mom",
  author: " Gregory E. Lang",
  price: "$520",
};

// Nested components, React Tools
function BookList() {
  return (
    <>
      <Message />
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
          price={firstBook.price}
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
          price={secondBook.price}
        />
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
          price={thirdBook.price}
        />
        <Book
          img={fourthBook.img}
          title={fourthBook.title}
          author={fourthBook.author}
          price={fourthBook.price}
        />
        <Book
          img={fifthBook.img}
          title={fifthBook.title}
          author={fifthBook.author}
          price={fifthBook.price}
        />
        <Book
          img={sixthBook.img}
          title={sixthBook.title}
          author={sixthBook.author}
          price={sixthBook.price}
        />
        <Book
          img={seventhBook.img}
          title={seventhBook.title}
          author={seventhBook.author}
          price={seventhBook.price}
        />
      </section>
    </>
  );
}

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
      <p> Buying and Selling the products from here </p>;
    </div>
  );
};

const Book = (props) => {
  // const { img, title, author, price } = props;  // Props Destructuring
  const { img, title, author, price, children } = props; // Props Destructuring
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3> {title} </h3>
      <h4> {author} </h4>
      {children}
      <h5> {price} </h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
