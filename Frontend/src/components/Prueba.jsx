import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Prueba({ arrayPreguntas,estilo }) {
  return (
    <div className={`bg-gray-100 p-8 ${estilo}`}>
      <h1 className="text-3xl">SIMULACION PRUEBA</h1>
      {
        // eslint-disable-next-line react/prop-types
        arrayPreguntas.map((element, index) => {
          return (
            <div key={index}>
              <li>
                {index + 1}.-{element}
              </li>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Opciones:
                </label>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="opcion1"
                    name={index}
                    value="rojo"
                    className="mr-2"
                  />
                  <label htmlFor="opcion1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat officia neque hic veniam, nostrum dolorum. Atque deserunt dolorum quidem similique dolores, non repudiandae incidunt reiciendis. Vero quo soluta earum recusandae?</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="opcion2"
                    name={index}
                    value="azul"
                    className="mr-2"
                  />
                  <label htmlFor="opcion2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto, incidunt praesentium quas porro totam eligendi voluptas? Officiis numquam, debitis dolor quasi enim delectus quae eius sint asperiores. Omnis, facilis.</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="opcion3"
                    name={index}
                    value="verde"
                    className="mr-2"
                  />
                  <label htmlFor="opcion3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium officia alias dolorum voluptatum, vel nostrum nemo exercitationem earum similique placeat quam. Modi dolores doloribus accusamus ad est sint ipsam?</label>
                </div>
                 <div className="flex items-center">
                  <input
                    type="radio"
                    id="opcion3"
                    name={index}
                    value="verde"
                    className="mr-2"
                  />
                  <label htmlFor="opcion3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium officia alias dolorum voluptatum, vel nostrum nemo exercitationem earum similique placeat quam. Modi dolores doloribus accusamus ad est sint ipsam?</label>
                </div>
              </div>
            </div>
          );
        })
      }
      <Link to={"/"} className="absolute rounded-lg w-20  left-80 bg-blue-700 text-white text-center h-7">Finalizar</Link>
    </div>
  );
}

export default Prueba;
