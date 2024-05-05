import { Table, Button } from "react-bootstrap";

export const Listado = ({ BaseColaboradores, eliminarColaborador }) => {
  return (
    <Table striped bordered hover responsive="md">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {BaseColaboradores.map((colaborador, index) => (
          <tr key={index}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <Button variant="danger" onClick={() => eliminarColaborador(colaborador.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
