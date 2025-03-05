// Import's Component
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Chatbox from '../components/chatbox';

import './css/support.css'


function Soporte() {
  return (
    <body className="App">
      <NavBar />

      <div className="soporte-container">
        <div className="soporte-content">
          {/* Título */}
          <h1 className="title">Soporte Técnico</h1>

          {/* Sección FAQ */}
          <div className="soporte-section">
            <h2 className="soporte-subtitle">Preguntas Frecuentes</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>¿Cómo puedo contactar con soporte técnico?</h3>
                <p>Puedes comunicarte con nosotros a través de correo electrónico, teléfono o formulario de contacto.</p>
              </div>
              <div className="faq-item">
                <h3>¿Cuál es el tiempo de respuesta?</h3>
                <p>Dependiendo del tipo de problema, respondemos en un plazo de 24 a 48 horas.</p>
              </div>
              <div className="faq-item">
                <h3>¿Ofrecen mantenimiento para software de terceros?</h3>
                <p>Sí, pero primero realizamos una evaluación técnica del código.</p>
              </div>
            </div>
          </div>

          {/* Sección de Servicios */}
          <div className="soporte-section">
            <h2 className="soporte-subtitle">Servicios de Mantenimiento y Consultoría</h2>
            <ul className="servicios-list">
              <li>📌 Soporte técnico para empresas y particulares</li>
              <li>📌 Auditorías de seguridad y pruebas de penetración (pentesting)</li>
              <li>📌 Mantenimiento preventivo y correctivo de equipos</li>
              <li>📌 Optimización de software y hardware</li>
              <li>📌 Consultoría en ciberseguridad y protección de datos</li>
            </ul>
          </div>
        </div>
      </div>

      <Chatbox />

      

      <Footer />
    </body>
  );
}

export default Soporte;
