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
        <Form.Label>Buscar colaborador</Form.Label>
        <Form.Control
          type="text"
          value={filtro}
          placeholder="Buscar por nombre, correo, edad, cargo o teléfono"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};