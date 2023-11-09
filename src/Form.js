import"./Form.css"
import React, { useState } from 'react';


const App=()=>{

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [name, setName]= useState('');
  const [isValidName, setIsvalidName] = useState(true);
  const [number, setNum]= useState('');
  const [isValidNum, setIsvalidNum] = useState(true);

  const handleNameChange=(e)=>{
    setName(e.target.value);
    setIsvalidName(e.target.value?.length > 0);
  };

  const handleNumChange=(e)=>{
    const inputNum = e.target.value;
    const numberpattern = /[0-9]/;
    setIsvalidNum(numberpattern.test(inputNum));
    setNum(inputNum);
  }

    const handleEmailChange=(e)=>{
    const inputEmail = e.target.value;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailpattern.test(inputEmail));
    setEmail(inputEmail);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]=\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailpattern.test(email))

    const numberpattern = /[0-9]/;
    setIsvalidNum(numberpattern.test(number))


    setIsvalidName(name.length > 0)
    isValidEmail && isValidName ? alert('Form submitted') :
      alert('Form validation failed');
  }

  return (
    <div className='App'>
      <h1> Form Validation </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>  Email : </label>
          <input
            type='text'
            value={email}
            id='email'
            onChange={handleEmailChange}
            className={isValidName ? 'valid' : 'invalid'}>

          </input>
        </div>
        <div className='form-feedback'>
          {
           !isValidEmail && (<span className='invalid-email'>Enter valid email</span>)
          }
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Name : </label>
          <input
          type='text'
          value={name}
          id='name'
          onChange={handleNameChange}
          className={isValidName ? 'valid' : 'invalid'}>

          </input>
        </div>
        <div className='form-feedback'>
          {
          !isValidName && (<span className='invalid-name'>Enter valid name</span>)
          }
        </div>

        <div classNum='form-group'>
          <label htmlFor='number'> Mobile Number : </label>
          <input
          type='integer'
          value={number}
          id='number'
          onChange={handleNumChange}
          classNum={isValidNum ? 'valid' : 'invalid'}>

          </input>
        </div>
        <div classNum='form-feedback'>
          {
          !isValidNum && (<span classNum='invalid-number'>Enter valid number</span>)
          }
        </div>


         <br></br>

        <button type='submit'>Submit</button>
      </form>
    </div>





  );

}

export default App;




