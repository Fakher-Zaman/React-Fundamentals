import React, { useState } from 'react';
// useState is a function
// call useState() -> this returns a value
// destructure this value
// useState('hello world') -> ['hello world', f]
// component needs to re-render

// ===========Rules of Hooks (useState, useEffect, useRef, etc)==========
// 1. must be in the function/component body
// 2. must be called at the top level
// 3. cannot call conditionally
// 4. cannot call inside loops, nested functions, or anything that isn't a function
// 6. components must start with a capital letter

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title'); // Hook
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={() => (text === 'random title') ? setText('hello world') : setText('random title')}>change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
