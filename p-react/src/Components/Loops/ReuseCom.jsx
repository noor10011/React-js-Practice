import React from 'react'

const ReuseCom = ({data}) => {
  return (
    <div style={{border:"4px solid green",color:"orange",padding:"10px",margin:"10px"}}>
    
      <h2>id:{data.id}</h2>
      <h2>name:{data.name}</h2>
      <h2>age:{data.age}</h2>
      <h2>college:{data.college}</h2>
    </div>
  )
}

export default ReuseCom
