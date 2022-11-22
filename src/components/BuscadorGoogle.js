import "../App.css";

function BuscadorGoogle() {
  return (
    <div className="contenedor_buscador">
      <div className="titulo">
        <h3>
          <strong>Encuentra</strong> tu tienda mas cercana
        </h3>
        <button className="boton">
          <strong>ENCONTRAR</strong> TIENDA
        </button>
      </div>
      <div className="contenedor_info_tienda"></div>
    </div>
  );
}

export default BuscadorGoogle;
