import React, { useRef, useState } from 'react'
import ForwardRef from './ForwardRef';

const UseRef = () => {
const inputRef = useRef(null) ;  
const h1Ref = useRef(null);

const inputHandler = () =>{
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.style.color="orange";
    inputRef.current.placeholder="enter password"
} 
const h1Handler = () => {
    console.log(h1Ref);
    h1Ref.current.style.color="blue"
}
const toggelHandler = () => {
    if( inputRef.current.style.display!="none")
    {
         inputRef.current.style.display="none"
    }
    else{
        inputRef.current.style.display="inline";
    }
}
  return (
    <div>
      <h1>UseRef</h1>
      <button onClick={toggelHandler}>Toggel</button>
      <input ref={inputRef} type="text" placeholder='Enter username' />
      <button onClick={inputHandler}>Control input field</button>
      <h1 ref={h1Ref}>Use of useRef</h1>
      <button onClick={h1Handler}>Control h1 Tag</button>
      <hr/>
      <h1>Use of ForwardRef</h1>
      <ForwardRef ref={inputRef}/>
       <button onClick={inputHandler}>Control input field</button>

    </div>

  )
}

export default UseRef
