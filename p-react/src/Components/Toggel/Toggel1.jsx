import React, { useState } from 'react'
import Toggel2 from './Toggel2'

const Toggel1 = () => {
    const[display,setDisplay] = useState(true)
  return (
    <div>
      <h1>Toggel Component for hide & show</h1>
      <button onClick={()=>setDisplay(!display)}>Toggel</button>
      {display ? <Toggel2/> :null }
    </div>
  )
}

export default Toggel1
