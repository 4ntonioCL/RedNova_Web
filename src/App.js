import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Screens
import Home from './pages/home'
import Services from './pages/services'
import Planes from './pages/plans'
import Soporte from './pages/support'

function App() {
  return (
    <BrowserRouter>
      <body className="App">
        <Routes>
          {/* Definir las rutas de las pantallas */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/soporte" element={<Soporte />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
