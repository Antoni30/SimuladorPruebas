import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormPregunta = ({idPersona}) => {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const Datos={
      id_profesor:idPersona,
      pregunta: pregunta,
      respuesta:respuesta
    }
    try {
      fetch('http://localhost:2000/api/cuestionario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Datos),
      });
  } catch (err) {
      console.error(err.message);
  }
    setPregunta('');
    setRespuesta('');
  };

  return (
    <div className="w-full mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <div className="mb-4">
          <label htmlFor="pregunta" className="block text-gray-700 text-sm font-bold mb-2">
            Pregunta:
          </label>
          <input
            type="text"
            id="pregunta"
            name="pregunta"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="respuesta" className="block text-gray-700 text-sm font-bold mb-2">
            Respuesta:
          </label>
          <input
            type="text"
            id="respuesta"
            name="respuesta"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormPregunta;

