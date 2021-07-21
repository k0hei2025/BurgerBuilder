
import React, { useRef , useState } from 'react'
import classes from './addUser.module.css'


export default function AddUsers() {

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

 const submitHandler= async(event)=>{
     event.preventDefault();
   
     const userData = {
       name : nameRef.current.value,
       email : emailRef.current.value,
       phone : phoneRef.current.value
     }
   

    const data = await  fetch(`https://user-management-407ec-default-rtdb.firebaseio.com/addUser.json`,{
       
      method:"POST",
      body:JSON.stringify({
        id : new Date().getTime(),
        data : userData,
         returnSecureToken : true 
        
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    const resData = await data.json();
    console.log(resData)
  }
        



               return (

       
                            <div className={classes.container}>  
  <form id={classes.contact} onSubmit={submitHandler}>
   
    <h3 style={{color:'black'}}>Add User Form</h3>
    <fieldset>
      <input placeholder="Your name" type="text" tabIndex="1" required autofocus ref={nameRef}  />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex="2" required ref={emailRef} />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number " type="tel" tabIndex="3" required ref={phoneRef} />
    </fieldset>
   
    <fieldset>
      <button name="submit" type="submit" id={classes.contact} data-submit="...Sending">Submit</button>
    </fieldset>
   
  </form>
</div>
               )
}
