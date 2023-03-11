import React from "react";
import { createRoot } from 'react-dom/client';
// CSS
import "./style.css";
// Important components
import Message from "./Message";
import Book from "./Book";
// Startup Array
import { books } from "./books";
// Testing File
import { greeting } from "./testing/testing";

// Nested components, React Tools
function BookList() {
  console.log(greeting);
  return (
    <>
      <Message />
      <section className="booklist">
        {books.map((book, index) => {
          // return <Book key={book.id} book={book}></Book>;
          return <Book key={book.id} {...book}></Book>  // Spread Operator
        })}
      </section>
    </>
  );
}

// ReactDOM.render(<BookList />, document.getElementById("root"));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList tab="home" />);