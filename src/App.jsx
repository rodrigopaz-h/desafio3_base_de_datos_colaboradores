import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Titulo } from "./components/Titulo";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import BaseColaboradoresData from "./assets/data/BaseColaboradores";

import "./App.css";

function App() {
  const [BaseColaboradores, setBaseColaboradores] = useState(BaseColaboradoresData);
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
        Object.values(colaborador).some((field) => field.toLowerCase().includes(value))
      )
    );
  };

  return (
    <Container>
      <Titulo />
      <Row>
        <Col md={8}>
          <Buscador buscarColaborador={handleBuscarColaborador} />
          <Listado
            BaseColaboradores={BaseColaboradores}
            eliminarColaborador={handleEliminarColaborador}
          />
        </Col>
        <Col md={4}>
          <Formulario agregarColaborador={handleAgregarColaborador} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
