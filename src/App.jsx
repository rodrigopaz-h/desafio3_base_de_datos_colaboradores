import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Titulo } from "./components/Titulo";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Alerta } from "./components/Alert";
import BaseColaboradoresData from "./assets/data/BaseColaboradores";

import "./App.css";

function App() {
  const [BaseColaboradores, setBaseColaboradores] = useState(BaseColaboradoresData);
  const [filteredData, setFilteredData] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [formErrors, setFormErrors] = useState({ text: "", color: "" });

  const handleAgregarColaborador = (newColaborador) => {
    setBaseColaboradores([...BaseColaboradores, newColaborador]);
  };

  const handleEliminarColaborador = (id) => {
    setBaseColaboradores(BaseColaboradores.filter((colaborador) => colaborador.id !== id));
    if (filtro.length) handleBuscarColaborador(filtro);
  };

  const handleBuscarColaborador = (value) => {
    setFilteredData(
      BaseColaboradores.filter((colaborador) =>
        Object.values(colaborador).some((field) => field.toLowerCase().includes(value))
      )
    );
  };

  const handleErrors = ({ text, color }) => {
    setFormErrors({ text, color });
  };

  return (
    <Container>
      <Titulo tag={<h1>Lista de colaboradores</h1>} />
      <Row>
        <Col md={8}>
          <Buscador
            buscarColaborador={handleBuscarColaborador}
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <Listado
            BaseColaboradores={filtro.length ? filteredData : BaseColaboradores}
            eliminarColaborador={handleEliminarColaborador}
          />
        </Col>
        <Col md={4}>
          <Formulario handleErrors={handleErrors} agregarColaborador={handleAgregarColaborador} />
          <Alerta text={formErrors.text} color={formErrors.color} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
