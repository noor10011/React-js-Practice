import React, { useState } from 'react'
import Clock from './Clock'


const Time = () => {
  const [color,setColor] = useState("blue")
  return (
    <div>
      <h1>Digital Clock in react js</h1>
      <Clock color={color}/>
      <select onChange={(event)=>setColor(event.target.value)} value={color}>
        <option value="Blue">Blue</option>
        <option value="Pink">Pink</option>
        <option value="Orange">Orange</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
      </select>
      
    </div>
  )
}

export default Time
