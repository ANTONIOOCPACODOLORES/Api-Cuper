import React from 'react';

const Header = ({ setView }) => {
  return (
    <header>
      <h1>Gestión de Control Escolar</h1>
      <nav>
        <button onClick={() => setView('teachers')}>Teachers</button>
        <button onClick={() => setView('students')}>Students</button>
      </nav>
    </header>
  );
};

export default Header;
