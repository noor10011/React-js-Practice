import React, { useState } from 'react'
import Variable from './Variable'
import Object from './Object'
import Array from './Array'
import Button from './Button'
import Jsx from './Jsx'

const Props1 = () => {
//variable
const name = "sara"
const age = 13

//objects
let student1 = {
    name: "sara",
    age:14,
    city:"lahore"
}
let student2 = {
    name: "aira",
    age:19,
    city:"Murree"
}
let student3 = {
    name: "laiba",
    age:15,
    city:"sialkot"
}
//array
 const fruits = ["apple","pear","orange" ]

 //state
 const [Animal,setAnimal] =useState("bat")

  return (
    <div>
       <Variable name={name} age={age} city={""}/>
      <Object student = {student1}/>
      <Object student = {student2}/>
      <Object student = {student3}/>
      <Array fruits = {fruits}/>
      <Button Animal={Animal}/>
       <button onClick={()=>setAnimal("frog") }>Counter</button>
       <Jsx>
        <h1 style={{color:"orange"}}>Props with Jsx</h1>
        <h2>Passing Props</h2>
       </Jsx>
        <Jsx>
        <h1>Props with Jsx</h1>
        <h2>Passing Props</h2>
       </Jsx>

    </div>
  )
}

export default Props1
