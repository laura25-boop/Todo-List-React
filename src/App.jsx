import React from "react";
import Header from "./components/Header";
import Programas from "./components/Programas";
import Contacto from "./components/Contacto";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Programas />
      <Contacto />
    </div>
  );
}

export default App;
