import React, { useState } from 'react'

const MultipleConditions = () => {
    const [color,setColor] = useState(0)
  return (
    <div>
      <h1>Multiple Conditions</h1>
      <button onClick={()=>setColor(color+1)}>Color{color}</button>
      {
        color==0 ? <h1>Red Color</h1> :
        color==1 ? <h1>Green Color</h1> :
        color==2 ? <h1>Yellow Color</h1> :
        color==3 ? <h1>Blue Color</h1> :
        color==4 ? <h1>white Color</h1> :
         <h1>Default Color</h1>
 
      }
    </div>
  )
}

export default MultipleConditions
