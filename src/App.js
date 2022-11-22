import "./App.css";
import Buscador from "./components/Buscador";
import BuscadorGoogle from "./components/BuscadorGoogle";
import Mapa from "./components/Mapa";
import MapaGoogle from "./components/MapaGoogle";

function App() {
  return (
    <div className="contenedor">
      <Mapa />
      <Buscador />
      <MapaGoogle />
      <BuscadorGoogle />
    </div>
  );
}

export default App;
