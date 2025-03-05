import './css/services.css'

// Import's Component
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Servicio from '../components/servicio';

function Services() {
  return (
    <body className="App">
      <NavBar />

      <div>
        <h1 className='title'>Servicios</h1>

        <div className='servicios'>
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
        </div>
      </div>

      <Footer />
    </body>
  );
}

export default Services;
