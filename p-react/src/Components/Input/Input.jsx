import React, { useState } from 'react'

const Input = () => {
    const[value,setValue] = useState("")
  return (
    <div>
      <h1>Input Field Value</h1>
      <input type="text" value={value} placeholder='Enter username' onChange={(event)=>setValue(event.target.value)}/>
      <h1>{value}</h1>
      <button onClick={()=>setValue("")}>Clear</button>
    </div>
  )
}

export default Input
