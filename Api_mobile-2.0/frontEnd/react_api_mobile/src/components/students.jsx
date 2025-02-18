import React from "react";
import StudentsForm from "./StudentsForm";
import "./students.css";

const Students = () => {
  return (
    <div className="container">
      <h2>Lista de Estudiantes</h2>
      <StudentsForm />
      <p>Lista de los estudiantes...</p>
    </div>
  );
};

export default Students;
