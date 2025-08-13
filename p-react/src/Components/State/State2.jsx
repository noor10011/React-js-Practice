import React, { useState } from 'react'

const State2 = () => {
const [count,setCount] = useState(0)
const [rCount,setRCount] = useState(10)
const handleCounter =() => {
    setCount(count+1)
}
  return (
    <div>
        <h1>Counter States in React Js</h1>
        <div>Counter:{count}</div>
        <button onClick={handleCounter}>Increment</button>
        
    
        <div>R Counter:{rCount}</div>
        <button onClick={()=>setRCount(rCount-1)}>decrement</button>
    </div>
  )
}

export default State2
