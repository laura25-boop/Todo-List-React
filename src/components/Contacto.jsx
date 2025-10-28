import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${formData.nombres} ${formData.apellidos}`);
    setFormData({ nombres: "", apellidos: "", mensaje: "" });
  };

  return (
    <section className="contacto">
      <h3>Contacto</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombres"
          placeholder="Nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
