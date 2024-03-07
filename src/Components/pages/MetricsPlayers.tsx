import { useRef, useState } from "react";
interface Player {
  nombre: string;
  partidosJugados: number;
  goles: number;
  asistencias: number;
  promedioGoles: number;
  promedioAsistencias: number;
  contribucionDirecta: number;
}

const MetricsPlayers = () => {
  const [nombre, setNombre] = useState("");
  const [partidosJugados, setPartidosJugados] = useState<string>("");
  const [goles, setGoles] = useState<string>("");
  const [asistencias, setAsistencias] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const nombreInputRef = useRef<HTMLInputElement>(null); // Referencia al campo de entrada de nombre

  const promedioGoles = parseInt(goles) / parseInt(partidosJugados);
  const promedioAsistencias = parseInt(asistencias) / parseInt(partidosJugados);
  const contribucionDirecta =
    ((parseInt(goles) + parseInt(asistencias)) / parseInt(partidosJugados)) *
    100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    switch (name) {
      case "floating_name":
        setNombre(value);
        break;
      case "floating_npartidos":
        setPartidosJugados(value);
        break;
      case "floating_goles":
        setGoles(value);
        break;
      case "floating_asistencias":
        setAsistencias(value);
        break;
      default:
        break;
    }
  };

  const handlePlayerDelete = (index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const newPlayer: Player = {
    nombre,
    partidosJugados: parseInt(partidosJugados),
    goles: parseInt(goles),
    asistencias: parseInt(asistencias),
    promedioGoles: promedioGoles,
    promedioAsistencias: promedioAsistencias,
    contribucionDirecta: contribucionDirecta,
  };

  const reset = () => {
    setNombre("");
    setPartidosJugados("");
    setGoles("");
    setAsistencias("");

    if (nombreInputRef.current) {
      nombreInputRef.current.focus();
    }
  };

  /* const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handlePartidosJugadosChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPartidosJugados(e.target.value);
  };

  const handleGolesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoles(e.target.value);
  };

  const handleAsistenciasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAsistencias(e.target.value);
  }; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar los campos antes de enviar
    if (!nombre || !partidosJugados || !goles || !asistencias) {
      alert("Por favor, rellena todos los campos");
      return;
    }

    //
    setPlayers([...players, newPlayer]);

    // Reiniciar los campos del formulario después de enviar
    reset();
  };

  return (
    <>
      <div className="h-full">
        <h1 className="text-6xl font-bold py-6 p-0 text-center text-slate-300">
          Metrics
        </h1>
        <p className="text-1xl font-bold text-center text-slate-300 divide-y-2">
          Estadisticas de Jugadores de la Liga Master PES2017
        </p>
        <div className="flex flex-col lg:flex-row mx-6 gap-4">
          <div className="lg:w-2/6 ">
            <form
              action=""
              className="border border-slate-500 rounded-lg m-4 p-4 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="relative z-0 mb-5 group ">
                <input
                  ref={nombreInputRef}
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={nombre}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre:
                </label>
              </div>

              <div className="relative z-0 mb-5 group ">
                <input
                  type="number"
                  name="floating_npartidos"
                  id="floating_npartidos"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={partidosJugados}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_npartidos"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  N° Partidos
                </label>
              </div>
              <div className="relative z-0 mb-5 group ">
                <input
                  type="number"
                  name="floating_goles"
                  id="floating_goles"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={goles}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_goles"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Goles
                </label>
              </div>
              <div className="relative z-0 mb-5 group ">
                <input
                  type="number"
                  name="floating_asistencias"
                  id="floating_asistencias"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={asistencias}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="floating_asistencias"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Asistencias
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 text-slate-200 font-bold py-2 px-4 rounded w-full"
                >
                  Añadir
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-4/6 mt-4 border border-slate-500 rounded h-fit">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs dark:border-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="hidden lg:table-cell px-6 py-3 text-center"
                  >
                    Jugados
                  </th>
                  <th
                    scope="col"
                    className=" lg:table-cell px-6 py-3 text-center"
                  >
                    Goles / %
                  </th>
                  <th
                    scope="col"
                    className=" lg:table-cell px-6 py-3 text-center"
                  >
                    Asistencias / %
                  </th>
                  <th
                    scope="col"
                    className="lg:table-cell px-6 py-3 text-center"
                  >
                    Contribución
                  </th>
                  <th scope="col" className="px-6 py-3 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="pl-6 py-0 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {player.nombre}
                    </td>
                    <td className="hidden lg:table-cell text-center">
                      {player.partidosJugados}
                    </td>
                    <td className="lg:table-cell font-bold text-center">
                      {player.goles}
                      <span className="text-gray-500 ml-4 font-medium">
                        ({player.promedioGoles.toFixed(2)}%)
                      </span>
                    </td>
                    <td className="lg:table-cell font-bold text-center">
                      {player.asistencias}
                      <span className="text-gray-500 ml-4 font-medium">
                        ({player.promedioAsistencias.toFixed(2)}%)
                      </span>
                    </td>
                    <td className="lg:table-cell font-bold text-center text-lg">
                      {player.promedioGoles.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 font-bold text-red-700">
                      <button onClick={() => handlePlayerDelete(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsPlayers;
