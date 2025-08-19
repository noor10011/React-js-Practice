import React, { useContext } from "react";
import { SubjectContext } from "./ContextApi"; // <-- make sure this matches path

const Subject = () => {
  const subject = useContext(SubjectContext);

  return <h2 style={{backgroundColor:"orange", padding:10}}>Current Subject: {subject}</h2>;
};

export default Subject;
