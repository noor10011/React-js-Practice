import React from 'react'

const Jsx = ({children,color="green"}) => {
  return (
    <div style={{color:color, backgroundColor:"pink" ,width:"200px", border:"3px solid blue" ,margin:"10px" ,padding:"10px"}}>
      {children}
    </div>
  )
}

export default Jsx
