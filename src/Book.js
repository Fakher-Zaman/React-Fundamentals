import React from 'react';

const Book = ({ img, title, author, price }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        // alert("Hello World");
    };
    const complexExample = (author) => {
        console.log(author);
    };

    return (
        <article className="book" onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt="" />
            {/* <h3 onClick={() => console.log(title)}>{title}</h3> */}
            <h3> {title} </h3>
            <h4> {author} </h4>
            <h5> {price} </h5>
            <div>
                <button type="button" onClick={clickHandler}>Reference Example</button>
                <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
            </div>
        </article>
    );
};

export default Book;