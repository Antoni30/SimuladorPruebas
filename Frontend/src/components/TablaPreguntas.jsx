import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function TablaPreguntas({ id_teacher,addCuestionario }) {
  const [cuestionarios, setCuestionarios] = useState([]);
  

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(
          `http://localhost:2000/api/cuestionario/${id_teacher}`
        );
        const datos = await respuesta.json();
        setCuestionarios(datos);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, [cuestionarios, id_teacher]);

  const onData = (data)=>{
    
     addCuestionario(data)
  }

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Pregunta</th>
            <th className="py-2 px-4 border-b">Respuesta</th>
            <th className="py-2 px-4 border-b text-center">Add Cuestionario</th>
          </tr>
        </thead>
        <tbody>
          {cuestionarios.map((cuestionario, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{cuestionario.pregunta}</td>
              <td className="py-2 px-4 border-b">{cuestionario.respuesta}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="" onClick={()=>onData(cuestionario.pregunta)}>➕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPreguntas;
