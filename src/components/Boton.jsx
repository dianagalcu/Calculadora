function Boton(props) {
  const operador = (valor) => {
    return isNaN(valor) && (valor !== ".") && (valor !== "=");
  };

  return (
    <div
      className={`boton-container ${operador(props.children) ? "operador" : ""}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
  );
}

export default Boton;
