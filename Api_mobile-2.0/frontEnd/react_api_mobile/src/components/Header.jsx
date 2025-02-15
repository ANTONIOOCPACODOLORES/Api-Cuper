import React from "react";
import "./Header.css";

const Header = ({ setView }) => {
  return (
    <header className="header">
      <h1>Gestión Escolar</h1>
      <nav>
        <button onClick={() => setView("teachers")}>Profesores</button>
        <button onClick={() => setView("students")}>Estudiantes</button>
      </nav>
    </header>
  );
};

export default Header;
