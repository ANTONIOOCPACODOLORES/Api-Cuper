import React, { useState } from "react";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Students from "./components/Students"; // Asegúrate de tener un componente Students.jsx

function App() {
  const [view, setView] = useState("teachers");

  return (
    <div>
      <Header setView={setView} />
      {view === "teachers" ? <Teachers /> : <Students />}
    </div>
  );
}

export default App;
