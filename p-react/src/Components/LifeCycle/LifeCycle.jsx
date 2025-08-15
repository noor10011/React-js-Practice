import React, { useEffect, useState } from 'react'
import Props from './Props';

const LifeCycle = () => {
    const[counter,setCounter] = useState(0);
    const [data,setData] = useState(0);
    const[display,setDisplay] = useState("true")

    useEffect(()=>{
        return () => {console.log("unmounting phase")
        }
    }
    ,[display])
  return (

    <div>
       {display ? <Props counter={counter} data={data}/>: null}
      <button onClick={()=>setCounter(counter+1)}>Counter</button>
      <button onClick={()=>setData(data+1)}>data</button>
      <button onClick={()=>setDisplay(!display)}>display</button>
    </div>
  )
}

export default LifeCycle
