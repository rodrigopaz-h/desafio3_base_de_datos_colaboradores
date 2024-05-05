import React from "react";
import Form from "react-bootstrap/Form";

export const Buscador = ({ buscarColaborador, filtro, setFiltro }) => {
  const handleChange = (e) => {
    setFiltro(e.target.value);
    buscarColaborador(e.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="filtro">
        <Form.Control
          type="text"
          value={filtro}
          placeholder="Buscar un colaborador"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
