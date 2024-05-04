import React, { useState } from "react";
import { Titulo } from "./Titulo";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Formulario = ({ handleErrors, agregarColaborador }) => {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [mensaje, setMensaje] = useState("");

  const isAnyFieldEmptyOrNull = (obj) => {
    for (let key in obj) {
      if (obj[key] === "" || obj[key] === null) {
        return true;
      }
    }
    return false;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

    const errorMessages = isAnyFieldEmptyOrNull(form)
      ? dictionary.requiredData
      : !regexCorreo.test(form.correo)
      ? dictionary.invalidEmail
      : dictionary.success;

    handleErrors(errorMessages);

    if (errorMessages?.color === "success") {
      agregarColaborador(form);
      setForm({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setMensaje("Colaborador agregado exitosamente");
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Titulo tag={<h3>Agregar colaborador</h3>} />
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            name="nombre"
            value={form.nombre}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email del colaborador"
            name="correo"
            value={form.correo}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Edad del colaborador"
            name="edad"
            value={form.edad}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            name="cargo"
            value={form.cargo}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Teléfono del colaborador"
            name="telefono"
            value={form.telefono}
            onChange={onChange}
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Agregar colaborador
          </Button>
        </div>
      </Form>
    </>
  );
};
