import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('peter');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  console.log(secondValue);

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value: {secondValue}</h1> */}
      {/* {if(true) {<h1>hello world</h1>})} */}
      <h1>{text || 'fakher zaman'}</h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
    </>
  );
};

export default ShortCircuit;
