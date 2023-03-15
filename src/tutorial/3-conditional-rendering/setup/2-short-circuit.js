import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  console.log(setText);

  return (
    <>
      {/* <h1>{firstValue}</h1> */}
      {/* <h1>value: {secondValue}</h1> */}
      {/* {if(true) {<h1>hello world</h1>})} */}
      <h1>{text || 'fakher zaman'}</h1>
      <button className='btn' onClick={() => setError(!error)}>toggle error</button>
      {error && <h1>Error...</h1>}
      {/* ternary operator */}
      {error ? <p>there is an error...</p> : <div> <h2>there is no error</h2> </div>}
    </>
  );
};

export default ShortCircuit;
