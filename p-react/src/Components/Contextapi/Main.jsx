import React, { useState } from 'react'
import College from './College'
import { SubjectContext } from "./ContextApi"

const Main = () => {
const [Subject,setSubject]= useState("English")
  return (
     <div  style={{backgroundColor:"yellow", padding:10}}>
        <SubjectContext.Provider value={Subject}>
            <select onChange={(event)=>setSubject(event.target.value)}>
                <option value="">Select Subject</option>
                <option value="Maths">Maths</option>
                <option value="History">History</option>
                <option value="Science">Science</option>
            </select>
            <h1 >Context Api in react js</h1>
             <College/>
        </SubjectContext.Provider>
    </div>
  )
}

export default Main
