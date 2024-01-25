import { Link, useParams } from "react-router-dom";
import FormPregunta from "../components/FormPregunta";
import { useEffect, useState } from "react";
import TablaPreguntas from "../components/TablaPreguntas";
import ListCuestionario from "../components/ListCuestionario";
import Prueba from "../components/Prueba";

function PageGenPreguntas() {
  const { idTeacher } = useParams("");
  const [teach, setTeach] = useState();
  const [cuestionario, setCuestionarios] = useState([]);
  const [hidden, setHidden] = useState(true);
  const uniquePreguntas = [...new Set(cuestionario)];
  useEffect(() => {
    const teacher = async () => {
      try {
        const response = await fetch(
          `http://localhost:2024/api/profesor/${idTeacher}`
        );
        const person = await response.json();
        setTeach(person);
      } catch (error) {
        console.log(error);
      }
    };
    teacher();
  }, [idTeacher]);
  const addElements = (element) => {
    const updatedElements = [...cuestionario, element];
    setCuestionarios(updatedElements);
  };
  const actualizar = ()=>{
    setHidden(!hidden);
  }
  return (
    <>
      <div className={`flex items-center w-full justify-center h-screen flex-wrap ${hidden?null:'hidden'}`}>
        <div className="flex items-center flex-col w-2/4">
          <p>Generar Preguntas</p>
          <strong>
            <em>Ing. {teach}</em>
          </strong>
          <Link to={`/`} className="text-3xl">
            🔙
          </Link>
          <FormPregunta idPersona={idTeacher} />
        </div>
        <div className="flex justify-center items-center w-11/12 gap-7">
          <TablaPreguntas
            id_teacher={idTeacher}
            addCuestionario={addElements}
          />
          <ListCuestionario arrayPreguntas={uniquePreguntas} empezar={actualizar}/>
        </div>
      </div>
      <Prueba
        estilo={hidden ? "hidden" : null}
        arrayPreguntas={uniquePreguntas}
      />
    </>
  );
}

export default PageGenPreguntas;
