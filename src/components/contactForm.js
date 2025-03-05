import React, { useState } from "react";
import "./css/contactForm.css"; // Importamos los estilos

const ContactForm = () => {
  // Definición del estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Corregí el error aquí
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí el formulario se enviará automáticamente al endpoint de Formspree
    alert("Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario después del envío
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        method="POST"
        action="https://formspree.io/f/meoajjdp" // Endpoint de Formspree
      >
        <h2>Contáctanos</h2>

        <div className="name-email">
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escriba su mensaje"
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
