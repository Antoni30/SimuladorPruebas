// eslint-disable-next-line react/prop-types
function ListCuestionario({ arrayPreguntas,empezar}) {
    const onCambiar=()=>{
      empezar()
    }
  return (
    <div className="w-3/4  p-5 relative">
      <strong>Preguntas Cuestionario</strong>
      <div className="h-96 overflow-y-scroll">
        <ol>
          {
           // eslint-disable-next-line react/prop-types
           arrayPreguntas.map((element, index) => {
            return <li className="style" key={index}>{index + 1}.- {element}</li>;
          })
          }
        </ol>
      </div>
        <button onClick={onCambiar} className="absolute rounded-lg w-20  left-80 bg-blue-700 text-white text-center h-7" >Iniciar</button>
    </div>
  );
}

export default ListCuestionario;
