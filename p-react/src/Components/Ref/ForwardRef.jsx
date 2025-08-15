import React from 'react'

const ForwardRef = (props) => {
  return (
    <div>
      <input type="text" placeholder='Enter Password' ref={props.ref} />
    </div>
  )
}

export default ForwardRef
