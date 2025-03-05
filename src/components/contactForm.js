import React, { useState } from "react";
import "./css/contactForm.css"; // Importamos los estilos

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
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
