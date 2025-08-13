import React, { useState } from 'react'
import State2 from './State2'

const State1 = () => {
const [animals,setAnimals] = useState("parrot")
const handleChange = () =>{
  setAnimals("bear")
}
  return (
    <div>
      <h1>States in React JS</h1>
      <div>Animals : {animals}</div>
      <button onClick={handleChange}>Change Animal Name</button>
      <State2/>
    </div>
  )
}

export default State1
