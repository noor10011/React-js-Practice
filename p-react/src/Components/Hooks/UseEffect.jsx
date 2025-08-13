import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter,setCounter] = useState(0)
    const [zoom,setZoom] = useState(0)
    const [data,setData] = useState(0)


useEffect(()=>{
      counterFunction()
},[counter])

useEffect(()=>{
    zoomFunction()
},[])

useEffect(()=>{
    dataFunction()
})


const counterFunction = () =>{
console.log("counterFunction",zoom)
    }

const dataFunction = () => {
    console.group("dataFunction", data)
}    

const zoomFunction = () => {
    console.log("zoomFunction", zoom)
}    
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>
      <button onClick={()=>setZoom(zoom+1)}>Zoom:{zoom}</button>
       <button onClick={()=>setData(data+1)}>Data:{data}</button>
    </div>
  )
}

export default UseEffect
