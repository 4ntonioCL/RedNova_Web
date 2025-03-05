import './css/home.css';

// Import's Component
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Servicio from '../components/servicio';
import SliderComponent from '../components/SliderComponent';
import ContactForm from '../components/contactForm';

function Home() {
  const frases = [
    "Desde que contratamos el mantenimiento web con esta empresa, nuestra tienda en línea funciona sin problemas. Antes teníamos caídas constantes, pero ahora todo va como la seda. ¡Totalmente recomendados!",
    "El equipo de soporte técnico es increíble. Nos han resuelto problemas que otros técnicos no pudieron solucionar. Gracias a ellos, nuestra oficina funciona sin interrupciones.",
    "Necesitaba una página web profesional y la hicieron mejor de lo que imaginé. Se nota que cuidan cada detalle y además, siempre están disponibles para cualquier actualización que necesite.",
    "Llevamos meses con su servicio de mantenimiento informático y hemos notado una gran diferencia. Menos problemas, más rapidez y sobre todo, tranquilidad para enfocarnos en nuestro negocio.",
    "Mi página web quedó espectacular, pero lo mejor es que ellos se encargan de todo el mantenimiento. No tengo que preocuparme por actualizaciones ni fallos técnicos. ¡Un alivio total!",
    "Tenía un problema con mi ordenador que nadie podía solucionar, pero ellos lo arreglaron en tiempo récord. Se nota que saben lo que hacen. ¡Ya los he recomendado a varios amigos!",
    "Nuestro sitio web estaba desactualizado y lento, pero después del rediseño y optimización que hicieron, ahora funciona perfecto y se ve increíble. Además, el soporte es de 10.",
    "Contraté su servicio de mantenimiento informático para mi empresa y ha sido una de las mejores decisiones. Responden rápido y siempre tienen soluciones efectivas.",
    "Gracias a su ayuda, nuestra web ahora es más accesible y fácil de usar. Nos han asesorado en todo momento y nos han dado un servicio excelente.",
    "Desde que confiamos en ellos para el mantenimiento de nuestros equipos informáticos, hemos tenido menos problemas y más eficiencia en nuestro trabajo. Un servicio imprescindible."
  ];


  return (
    <div className="App">
      <NavBar />

      <div className='divFrase'>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100" 
          fill="currentColor" 
          viewBox="0 0 16 16"
          className='svg_seguridad'
        >
          <path 
            fillRule="evenodd"
            d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.240-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
          />
        </svg>

          <h1 className='frase'>"Protege tu negocio con soluciones de seguridad de vanguardia"</h1>
      </div>

      <h2 className='serv_title'>Principales servicios</h2>

      <div className='servicios'>
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
          <Servicio nombre="Prueba" descripcion="Esto es una prueba de la descripción de un servicio" />
      </div>

      <div className='testimonios'>
        <h2>Testimonios</h2>
        <SliderComponent frases={frases} />
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
}

export default Home;