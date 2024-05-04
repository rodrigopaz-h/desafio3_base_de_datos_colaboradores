import Alert from "react-bootstrap/Alert";

export const Alerta = ({ text, color }) => {
  return (
    <>
      {text && (
        <Alert variant={color} dismissible>
          {text}
        </Alert>
      )}
    </>
  );
};
