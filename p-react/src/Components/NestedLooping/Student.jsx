import React from 'react';

const Student = ({ students }) => {
  return (
    <div >
        <h1>Students</h1>
      {students.map((student, index) => (
        <div key={index}>
             <h2>{student.name}</h2>
            <ul>
                <li> 
                <h3>{student.id}</h3>
                </li>
                <li> 
                <h3>{student.age}</h3>
                </li>
           </ul>
        
          
        </div>
      ))}
    </div>
  );
};

export default Student;
