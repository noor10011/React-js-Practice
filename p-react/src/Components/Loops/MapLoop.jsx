import React from 'react'
import ReuseCom from './ReuseCom'

const MapLoop = () => {

const users=[
 {
    id:1,
    name:"zara",
    age:17,
    college:"Lahore university"
 },   
  {
    id:2,
    name:"aira",
    age:18,
    college:"Fast"
 },   
  {
    id:3,
    name:"zainab",
    age:12,
    college:"IUB"
 },  
  {
    id:4,
    name:"irum",
    age:15,
    college:"Nums"
 },   
]
  return (
    <div>
      <h1>Reuse Components in Map Loop</h1>
        {users.map((users)=>(
            <div key={users.id}>
                <ReuseCom data={users}/>
                </div>
        ))}
      
    </div>
  )
}

export default MapLoop
