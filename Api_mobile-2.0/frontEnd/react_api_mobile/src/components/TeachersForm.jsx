import React, { useState } from "react";
import "./Form.css";

const TeachersForm = () => {
  const [teacher, setTeacher] = useState({
    id: "",
    nombre: "",
    apellido: "",
    edad: "",
    carrera: "",
    salario: "",
  });

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profesor agregado:", teacher);
    setTeacher({ id: "", nombre: "", apellido: "", edad: "", carrera: "", salario: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Agregar Profesor</h2>
      <input type="text" name="id" placeholder="ID Profesor" value={teacher.id} onChange={handleChange} required />
      <input type="text" name="nombre" placeholder="Nombre" value={teacher.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={teacher.apellido} onChange={handleChange} required />
      <input type="number" name="edad" placeholder="Edad" value={teacher.edad} onChange={handleChange} required />
      <input type="text" name="carrera" placeholder="Carrera" value={teacher.carrera} onChange={handleChange} required />
      <input type="number" name="salario" placeholder="Salario" value={teacher.salario} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TeachersForm;
