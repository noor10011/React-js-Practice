import React, { useEffect, useState } from 'react'

const Clock = ({color}) => {
const [time,setTime] = useState("")
useEffect(()=>{
setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
},1000)
},[])
    return (
    <div>
      <h1 style={{color:color, backgroundColor:"black",borderRadius:"5px",width:"180px" }}>{time}</h1>
    </div>
  )
}

export default Clock
