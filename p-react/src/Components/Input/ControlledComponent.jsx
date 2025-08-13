import React, { useState } from 'react'

const ControlledComponent = () => {
    const [name,setName] = useState("")
     const [password,setPassword] = useState("")
      const [email,setEmail] = useState("")
  return (
    <div>

        <input type="text" placeholder='Enter username' onChange={(event)=>setName(event.target.value) } value={name} />
         <input type="text" placeholder='Enter password'  onChange={(event)=>setPassword(event.target.value)} value={password} />
          <input type="text" placeholder='Enter email' onChange={(event)=>setEmail(event.target.value) } value={email} />
          <button onClick={()=>{setName(""); setPassword("");setEmail("")}}>Submit</button>
          <h1>{name}</h1>
          <h1>{password}</h1>
          <h1>{email}</h1>
      
    </div>
  )
}

export default ControlledComponent
