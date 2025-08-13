import React from 'react'

const Map = () => {
const students = [
    {name:"zara",
     age:20,
     city:"Lahore"
    },
    {name:"sara",
     age:15,
     city:"Murree"
    },
    {name:"aira",
     age:22,
     city:"Pindi"
    },
    {name:"zara",
     age:23,
     city:"Karachi"
    },
]
  return (
    <div>
        <h1>Map in JSX</h1>
        {students.map((students,index) =>(
        <div key={index}>
            <h1>Name: {students.name}</h1>
             <h1>Age: {students.age}</h1>
              <h1>City: {students.city}</h1>
        </div>
))}
            
      
    </div>
  )
}

export default Map
