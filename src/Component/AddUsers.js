
import React, { useRef , useState } from 'react'
import classes from './addUser.module.css'
import {dataAction , addDataToFireBase} from '../store/store'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function AddUsers() {

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [re , setRe] = useState(false) 

 const dispatch = useDispatch();
 const dataList = useSelector((state)=>state.dataList)

   let err = (<b style={{color:'red'}}>Incorrect Phone No</b>);

 const submitHandler= async(event)=>{
     event.preventDefault();
  
   
     
     if (phoneRef.current.value.length === 10 && emailRef.current.value !== '' && emailRef.current.value !== null && nameRef.current.value !== null && nameRef.current.value !== '' ){
         const userData =   dispatch(dataAction.add({
        name : nameRef.current.value,
        email : emailRef.current.value,
        phone : phoneRef.current.value
     
        
      }))
      setRe(true)
 
   addDataToFireBase(userData)
     } else {
             
      setRe(true);
 
     }

   
    

 
    
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
       {re === true ? err  : err = '' }
       <b>err</b>
      <input placeholder="Your Phone Number " type="tel" tabIndex="3" required ref={phoneRef} />
    </fieldset>
   
    <fieldset>
      <button name="submit" type="submit" id={classes.contact} data-submit="...Sending">Submit</button>
    </fieldset>
   
  </form>
</div>
               )
}
