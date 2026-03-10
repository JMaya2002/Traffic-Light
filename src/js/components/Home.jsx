import React, { useState } from 'react';
import '../../styles/index.css';

const Home = () => {
  // Inicializamos el estado en 0 (todo apagado)
  const [color, setColor] = useState(0);

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      
      {/* Caja del semáforo */}
      <div className="cuerpo-semaforo bg-dark p-3 d-flex flex-column gap-3 shadow-lg">
        
        {/* LUZ ROJA (ID: 1) */}
        <div
          onClick={() => setColor(1)}
          className={`luz bg-danger text-danger ${color === 1 ? 'encendida' : ''}`}
        ></div>

        {/* LUZ AMARILLA (ID: 2) */}
        <div
          onClick={() => setColor(2)}
          className={`luz bg-warning text-warning ${color === 2 ? 'encendida' : ''}`}
        ></div>

        {/* LUZ VERDE (ID: 3) */}
        <div
          onClick={() => setColor(3)}
          className={`luz bg-success text-success ${color === 3 ? 'encendida' : ''}`}
        ></div>

      </div>

      {/* Botón opcional para resetear a 0 */}
      <button 
        className="btn btn-outline-secondary mt-4"
        onClick={() => setColor(0)}
      >
        Apagar Todo
      </button>
    </div>
  );
};

export default Home;