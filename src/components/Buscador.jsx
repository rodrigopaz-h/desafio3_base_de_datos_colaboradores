import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const Buscador = ({ buscarColaborador }) => {
  const [filtro, setFiltro] = useState('');

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