import React from "react";
import ReactDOM from "react-dom";

// This is a component
// Stateless functional component
// Always return JSX

function Greeting() {
  return <h2>1.This is my first component</h2>;
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));

// ---------------------------------------------------------------------------------------------

// JSX Rules:
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Article() {
  return (
    // Implies that no other element can be returned (except for a fragment <></>)
    <article>
      <div>
        <h1>2.JSX</h1>
        <p>Paragraph</p>
      </div>
      <input type="text" name="" id="" />
      <img src="" alt="" />
    </article>
  );
}

ReactDOM.render(<Article />, document.getElementById("article"));

// ---------------------------------------------------------------------------------------------

// Nested Components, React Tools
function Nested() {
  return (
    <div>
      <Message />
      <Person />
    </div>
  );
}

const Person = () => <h3>Fakher Zaman</h3>;
const Message = () => {
  return (
    <>
      <h2>3.Nested Components</h2>
      <p>Nested Component are more used in react.js for flexibility</p>
    </>
  );
};

ReactDOM.render(<Nested />, document.getElementById("nested"));
