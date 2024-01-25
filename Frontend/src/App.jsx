import ListTeacher from "./components/ListTeacher";
import AddTeacher from "./components/AddTeacher";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid grid-col-2 grid-flow-col gap-4">
        <div className="col flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Ingresar un Nuevo Profesor:</h1>
          <AddTeacher />
        </div>
        <div className="col flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Lista de Profesores</h1>
          <ListTeacher />
        </div>
      </div>
    </div>
  );
}

export default App;
