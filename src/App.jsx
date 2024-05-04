import React, { useState } from 'react';
import "./App.css";
import { Titulo } from './components/Titulo';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';

function App() {
  const [BaseColaboradores, setBaseColaboradores] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleAgregarColaborador = (newColaborador) => {
    setBaseColaboradores([...BaseColaboradores, newColaborador]);
  };

  const handleEliminarColaborador = (id) => {
    setBaseColaboradores(BaseColaboradores.filter((colaborador) => colaborador.id !== id));
  };

  const handleBuscarColaborador = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredData(
      BaseColaboradores.filter((colaborador) =>
        Object.values(colaborador).some((field) =>
          field.toLowerCase().includes(value)
        )
      )
    );
  };

  return (
    <>
      <div className="container">
        <Titulo />
        <Formulario agregarColaborador={handleAgregarColaborador} />
      </div>
      <div className='list' >
        <Buscador buscarColaborador={handleBuscarColaborador} />
        <Listado BaseColaboradores={BaseColaboradores} eliminarColaborador={handleEliminarColaborador} />
        </div>  
    </>
  );
}

export default App;
