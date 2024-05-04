import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Formulario = ({ handleErrors, agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { nombre, email, edad, cargo, telefono } = event.target;

    const dictionary = {
      requiredData: {
        text: "Por favor, ingresa los datos requeridos",
        color: "danger",
      },
      invalidEmail: {
        text: "Por favor, ingresa un correo electrónico válido",
        color: "danger",
      },
      success: {
        text: "Colaborador agregado con éxito!",
        color: "success",
      },
    };


    const errorMessages =
      !nombre.value || !email.value || !edad.value || !cargo.value || !telefono.value
      ? dictionary.requiredData
      : !regexCorreo.test(email.value)
      ? dictionary.invalidEmail
      : dictionary.success;

    handleErrors(errorMessages);

    if (errorMessages === dictionary.success) {
      agregarColaborador({
        nombre: nombre.value,
        correo: email.value,
        edad: edad.value,
        cargo: cargo.value,
        telefono: telefono.value
      });
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
      setMensaje('Colaborador agregado exitosamente');
    }
    
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nombre del colaborador" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email del colaborador" name="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </Form.Group>
     
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Edad del colaborador" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Cargo del colaborador" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Control type="tel" placeholder="Teléfono del colaborador" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </Form.Group>

      <Button variant="success" type="submit" onClick={() => console.log("Botón 'Agregar colaborador' clickeado")}>
        Agregar colaborador
      </Button>


      {mensaje && <p>{mensaje}</p>}
    </Form>
  );
};