import React from 'react';
import Student from './Student';

const College = ({ college }) => {
  return (
    <div style={{backgroundColor:"white", border:"4px solid green",padding:"10px",margin:"10px"}}>
      <h1>{college.college}</h1>
      <ul>
        <li>
          <h1>{college.city}</h1>
        </li>
        <li>
          <h1>{college.website}</h1>
        </li>
      </ul>

    

      <Student students={college.students} />
      <hr/>
    </div>
  );
};

export default College;
