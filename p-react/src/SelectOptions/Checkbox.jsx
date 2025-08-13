import React, { useState } from 'react'

const Checkbox = () => {
    const[skills,setSkills] = useState([])
    const handleSkills = (event) =>{
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(...skills.filter( (item)=> !item == event.target.value))
        }

        }

    ;
  return (
    <div>
        <h1>Select Skills</h1>
      <input type="checkbox" onChange={handleSkills}  id="php" value="php" />
      <label htmlFor="php">Php</label>
      <br/>

      <input type="checkbox" onChange={handleSkills} id="html" value="html" />
      <label htmlFor="html">HTML</label>
      <br/>

      <input type="checkbox" onChange={handleSkills}  id="java" value="java" />
      <label htmlFor="java">Java</label>
      <br/>

      <input type="checkbox" onChange={handleSkills} id="C++" value="C++" />
      <label htmlFor="C++">C++</label>
      <br/>
    
    </div>
    
  )}

export default Checkbox
