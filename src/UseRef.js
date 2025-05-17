// import React, { useRef } from 'react'

// //we can access dom directly with the help of useRef
// //sometiem in some situation we props an d state our not useful we have to modification  in html that time then we use use ref like focous change color to anything
// //we can use ref or we can use state
//if rerendering is not naccessary its prevent our component to re render

// //we can use useRef if there is form and i have 5-6 field and i dont want to re-render my form on each onchange then i can handle that form with useref yhat is uncontrolled way
// function UseRef() {
//     let inputRef=useRef()
//    const submit=(e)=>{
//     e.preventDefault() 
//     inputRef.current.focus()
//     inputRef.current.value=120
//     //inputRef.current.value.color with the help of this also we can change the color 
//     console.log("imput ref",inputRef)  //ref only return one object called current
//    } 
//   return (
//     <div>
//         <form>
//             <input ref={inputRef} />
//             <button  type='submit' onClick={submit}>button</button>
//         </form>
//     </div>
//   )
// }

// export default UseRef





// }


import React, { useRef, useState } from 'react';

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const validateEmail = (email) => {
    // add your email validation logic here
    // return an error message if validation fails
    if (!email) {
      return 'Email is required';
    }
    return null;
  };

  const validatePassword = (password) => {
    // add your password validation logic here
    // return an error message if validation fails
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return null;
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    // add your confirm password validation logic here
    // return an error message if validation fails
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return null;
  };

  const handleEmailChange = () => {
    const email = emailRef.current.value;
    const error = validateEmail(email);
    setEmailError(error);
  };

  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    const error = validatePassword(password);
    setPasswordError(error);
    // also update the confirm password error if necessary
    const confirmPassword = confirmPasswordRef.current.value;
    const confirmError = validateConfirmPassword(confirmPassword, password);
    setConfirmPasswordError(confirmError);
  };

  const handleConfirmPasswordChange = () => {
    const confirmPassword = confirmPasswordRef.current.value;
    const password = passwordRef.current.value;
    const error = validateConfirmPassword(confirmPassword, password);
    setConfirmPasswordError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    // handle signup logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" ref={emailRef} onChange={handleEmailChange} />
      {emailError && <div>{emailError}</div>}

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" ref={passwordRef} onChange={handlePasswordChange} />
      {passwordError && <div>{passwordError}</div>}

      <label htmlFor="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" ref={confirmPasswordRef} onChange={handleConfirmPasswordChange} />
      {confirmPasswordError && <div>{confirmPasswordError}</div>}

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default LoginForm;


//context 
//we can use multiple context 