function Peliculas(props) {

    function Tarjeta(props) {
        return (
          <div key={props.index} className="card">
            <img src={props.cartel} alt={props.titulo} />
            <div className="container">
              <h4>{props.titulo}</h4>
              <p>{props.sinopsis}</p>
            </div>
          </div>
        );
      }
      
  const catalogo = props.videoclub.peliculas.map((pelicula, index) => {
    return( // recuerda que tienes que poner el return para que te devuelva algo aqui si no te va a a dar el error array.prototype.map()
        <Tarjeta
      index={index}
      titulo={pelicula.titulo}
      sinopsis={pelicula.sinopsis}
      cartel={pelicula.cartel}
    ></Tarjeta>
    )
  });

  return (
  <div id="videoclub">{catalogo}</div>
  );
}

export default Peliculas;
