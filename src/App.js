
import './App.css';
import videoclub from "./videoclub"
import Cabecera from "./Cabecera"
import Footer from "./Footer"
import Peliculas from "./Peliculas"

function App() {
  return (
    <>
      <Cabecera></Cabecera>
      <Peliculas  videoclub={videoclub}></Peliculas>
      <Footer></Footer>
    </>
  );
}

export default App;
