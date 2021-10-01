import React, { Fragment } from 'react'
import TableContainer from '../Component/table'
import {useState} from 'react'

export default function Table() {
  
  
  const [add  , setAdd] =  useState("");
  
  func()=>{
   setAdd("dfdd")
  }
  func();
  
  console.log("add" ,add);
  
               return (
 
                              <Fragment>
                                             <TableContainer/>
                              </Fragment>
               )
}
