import React, { useEffect } from 'react'

const Props = ({counter,data}) => {
    useEffect(()=>{
        console.log("mounting phase")
    },[])
     useEffect(()=>{
        console.log("updating phase")
    },[counter])
  return (
    <div>
      <h1>Props using life cycle method</h1>
      <h1>Counter:{counter}</h1>
      <h1>Data:{data}</h1>
    </div>
  )
}

export default Props
