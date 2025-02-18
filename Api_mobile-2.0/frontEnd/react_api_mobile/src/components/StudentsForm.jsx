import React, { useState } from "react";
import "./Form.css";

const StudentsForm = () => {
  const [student, setStudent] = useState({
    id: "",
    nombre: "",
    apellido: "",
    edad: "",
    carrera: "",
    grupo: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Estudiante agregado:", student);
    setStudent({ id: "", nombre: "", apellido: "", edad: "", carrera: "", grupo: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Agregar Estudiante</h2>
      <input type="text" name="id" placeholder="ID Estudiante" value={student.id} onChange={handleChange} required />
      <input type="text" name="nombre" placeholder="Nombre" value={student.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={student.apellido} onChange={handleChange} required />
      <input type="number" name="edad" placeholder="Edad" value={student.edad} onChange={handleChange} required />
      <input type="text" name="carrera" placeholder="Carrera" value={student.carrera} onChange={handleChange} required />
      <input type="text" name="grupo" placeholder="Grupo" value={student.grupo} onChange={handleChange} required />
      <p><button type="submit">Guardar</button><button type="submit">Delete</button></p> 
    </form>
  );
};

export default StudentsForm;
