import React from 'react'
import { useReducer } from 'react'

const emptyData = {
    name:"",
    email:"",
    password:"",
    city:"",
    address:"",
}
const reducer= (data,action)=>{
    return{...data,[action.type]:action.val}
}
const UseReducer = () => {
const [state,dispatch] = useReducer(reducer,emptyData)
console.log(state)
  return (
    <div>
      <h1>UseReducer Hook</h1>
      <input onChange={(event)=>dispatch({val:event.target.value,type:"name"})} type="text" placeholder='Enter Name' />
      <br/><br/>
      <input  onChange={(event)=>dispatch({val:event.target.value,type:"password"})} type="password" placeholder='Enter password' />
      <br/><br/>
      <input  onChange={(event)=>dispatch({val:event.target.value,type:"email"})} type="text" placeholder='Enter email' />
      <br/><br/>
      <input  onChange={(event)=>dispatch({val:event.target.value,type:"city"})} type="text" placeholder='Enter city' />
      <br/><br/>
      <input  onChange={(event)=>dispatch({val:event.target.value,type:"address"})} type="text" placeholder='Enter address' />
      <br/><br/>

      <ul>
        <li>Name:{state.name}</li>
        <li>Password:{state.password}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
        </ul>
        <button onClick={()=>console.log(state)}>Add details</button>
    </div>
  )
}

export default UseReducer
