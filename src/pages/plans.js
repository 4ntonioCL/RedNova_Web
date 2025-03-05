import './css/plans.css';

// Import's Component
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import check from './check.svg';

function Planes() {
  const plans = [
    {
      name: 'Básico',
      price: '$9.99/mes',
      features: ['Acceso limitado', '1 usuario', 'Soporte básico'],
    },
    {
      name: 'Estándar',
      price: '$19.99/mes',
      features: ['Acceso completo', 'Hasta 3 usuarios', 'Soporte prioritario'],
    },
    {
      name: 'Premium',
      price: '$29.99/mes',
      features: ['Acceso VIP', 'Usuarios ilimitados', 'Soporte 24/7'],
    },
  ];

  return (
    <div className="App">
      <NavBar />

      <h1 className='title'>Nuestros Planes</h1>
      <div className='plans-container'>
        {plans.map((plan, index) => (
          <div key={index} className='plan-card'>
            <h2>{plan.name}</h2>
            <p className='price'>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i} className='text'>
                  <img src={check} alt="check" className='check-icon' /> {feature}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Planes;


// <button className='select-btn'>Seleccionar</button>