import React from "react";
import TeachersForm from "./TeachersForm";
import "./Teachers.css";

const Teachers = () => {
  return (
    <div className="container">
      <h2>Lista de Profesores</h2>
      <TeachersForm />
      <p>Aquí irá la lista de profesores...</p>
    </div>
  );
};

export default Teachers;
