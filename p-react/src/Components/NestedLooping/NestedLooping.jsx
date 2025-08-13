import React from 'react';
import College from './College';

const NestedLooping = () => {
  const colleges = [
    {
      college: "oxbridge",
      city: "ryk",
      website: "www.oxbridge.com",
      students: [
        { id: "1", name: "noor", age: "13" },
        { id: "2", name: "ahmed", age: "14" },
        { id: "3", name: "sara", age: "15" }
      ]
    },
    {
      college: "fast",
      city: "isl",
      website: "www.fast.com",
      students: [
        { id: "1", name: "noor", age: "13" },
        { id: "2", name: "ahmed", age: "14" },
        { id: "3", name: "sara", age: "15" }
      ]
    },
    {
      college: "punjab",
      city: "lahore",
      website: "www.punjab.com",
      students: [
        { id: "1", name: "noor", age: "13" },
        { id: "2", name: "ahmed", age: "14" },
        { id: "3", name: "sara", age: "15" }
      ]
    }
  ];

  return (
    <div>
      <h1>Nested Looping in Components</h1>
      {colleges.map((college, index) => (
        <div key={index}>
          <College college={college}  />
          
        </div>
      ))}
      <hr/>
    </div>

  );
};

export default NestedLooping;
