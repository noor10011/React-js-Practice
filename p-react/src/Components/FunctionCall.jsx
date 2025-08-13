import React from 'react'

const FunctionCall = () => {
    const Cars = (name) => {
        alert(name)
    }
    const fruits = () => {
        alert("apple")
    }
  return (
    <div>
        <h1 >Click Events & Funcion Call</h1>
      <button onClick={() => {Cars("Honda")}} >Honda </button>
        <button onClick={()=>{ Cars("Toyota")}}>Toyota</button>

        <button onClick={fruits}>Apple</button>
    </div>
  )
}

export default FunctionCall
