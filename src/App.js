import './App.css';

// Import's Component
import NavBar from './components/navbar'
import Footer from './components/footer'


function App() {
  return (
    <body className="App">
      <NavBar />

      <div className='divFrase'>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100" 
          fill="currentColor" 
          class="bi bi-shield-shaded" 
          viewBox="0 0 16 16"
          className='svg_seguridad'
          >
          <path 
            fill-rule="evenodd"
            d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"
          />
        </svg>

        <h1 className='frase'>"Protege tu negocio con soluciones de seguridad de vanguardia"</h1>
      </div>

      

      <Footer />
    </body>
  );
}

export default App;
