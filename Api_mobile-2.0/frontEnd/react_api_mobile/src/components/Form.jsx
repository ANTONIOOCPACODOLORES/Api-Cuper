import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    id_profesor: "",
    nombre: "",
    apellido: "",
    edad: "",
    carrera: "",
    salario: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/profesores", formData);
      alert("Profesor agregado correctamente");
      setFormData({ id_profesor: "", nombre: "", apellido: "", edad: "", carrera: "", salario: "" });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un error al guardar el profesor.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Agregar Profesor</h2>
      <input type="text" name="id_profesor" placeholder="ID Profesor" value={formData.id_profesor} onChange={handleChange} required />
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
      <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
      <input type="text" name="carrera" placeholder="Carrera" value={formData.carrera} onChange={handleChange} required />
      <input type="number" name="salario" placeholder="Salario" value={formData.salario} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
