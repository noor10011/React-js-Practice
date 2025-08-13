import React, { useState } from 'react'

const Dropdown = () => {
    const [city,setCity] = useState("Lahore")
  return (
    <div>
      <h1>Dropdown</h1>
      <select defaultValue="Lahore" onChange={(event)=> setCity(event.target.value)} >
        <option value="Karachi">Karachi</option>
        <option value="Murree">Murree</option>
        <option value="Pindi">Pindi</option>
        <option value="Lahore">Lahore</option>
      </select>
      <h1>Selected City :{city}</h1>
    </div>
  )
}

export default Dropdown
