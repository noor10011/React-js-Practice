import React, { useState } from 'react'

const Radio = () => {
     const [gender,setGender] = useState("")
  return (
    <div>
      <h1>Radio</h1>
      <h1>Select Gender </h1>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" checked={gender==="Male"} value="Male" />
      <label htmlFor="Male">Male</label>
<br/>
      <input type="radio" name="gender" onChange={(event) =>setGender(event.target.value)} checked={gender==="Female"} value="Female" />
      <label htmlFor="Female">Female</label>
      <h2>Selected Gender : {gender}</h2>
      
    </div>
  )
}

export default Radio
