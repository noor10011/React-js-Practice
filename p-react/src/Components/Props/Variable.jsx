import React from 'react'
//default props
const Variable = (Props,city="ryk") => {
  return (
    <div>
      <h1>{Props.name}</h1>
      <h1>{Props.age}</h1>
      <h1>{city}</h1>
      <hr />
    </div>
  )
}

export default Variable
