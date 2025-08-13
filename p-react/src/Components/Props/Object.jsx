import React from 'react'

const Object = ({student}) => {
  return (
    <div>
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h2>{student.city}</h2>
      <hr />
    </div>
  )
}

export default Object
