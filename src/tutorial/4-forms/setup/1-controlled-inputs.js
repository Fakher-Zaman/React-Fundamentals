import React from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World!");
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <h2>Simple Form</h2>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input type='text' id='firstName' name='firstName' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input type='text' id='email' name='email' />
          </div>
          <button type='submit' className='btn'>add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
