import { useState, useEffect } from "react";

interface Player {
  partidosJugados: number;
  nombre: string;
  goles: number;
  asistencias: number;
  promedioGoles: number;
  promedioAsistencias: number;
  contribucionDirecta: number;
}

function App() {
  const [nombre, setNombre] = useState("");
  const [partidosJugados, setPartidosJugados] = useState<number>();
  const [goles, setGoles] = useState<string>();
  const [asistencias, setAsistencias] = useState<string>();
  const [players, setPlayers] = useState<Player[]>([]);

  // Cargar datos de localStorage al cargar la aplicación
  useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  // Guardar datos en localStorage al cambiar el estado de players
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const handlePartidosJugadosChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPartidosJugados(parseInt(e.target.value, 10));
  };

  const handleGolesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoles(e.target.value);
  };

  const handleAsistenciasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAsistencias(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !partidosJugados || !goles || !asistencias) {
      alert("Por favor, rellena todos los campos");
      return;
    }

    if (
      partidosJugados < 0 ||
      parseInt(goles, 10) < 0 ||
      parseInt(asistencias, 10) < 0
    ) {
      alert("Por favor, introduce valores positivos");
      return;
    }

    const golesNum = parseInt(goles, 10);
    const asistenciasNum = parseInt(asistencias, 10);
    const promedioGoles = golesNum / partidosJugados;
    const promedioAsistencias = asistenciasNum / partidosJugados;
    const contribucionDirecta =
      ((golesNum + asistenciasNum) / partidosJugados) * 100;

    const newPlayer: Player = {
      nombre,
      partidosJugados,
      goles: golesNum,
      asistencias: asistenciasNum,
      promedioGoles,
      promedioAsistencias,
      contribucionDirecta,
    };

    setPlayers([...players, newPlayer]);
    // Reiniciar los campos del formulario después de enviar
    setNombre("");
    setPartidosJugados(0);
    setGoles("0");
    setAsistencias("0");
  };

  return (
    <>
      <div className="text-black dark:text-white dark:bg-gray-800 rounded-md h-screen mx-auto">
        <h1 className="text-6xl font-bold pt-4 text-center">Metricas</h1>

        <form action="" className="mx-auto container my-10 px-4 max-w-xl" onSubmit={handleSubmit}>
          <div className="relative z-0 mb-5 group ">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={nombre}
              onChange={handleNombreChange}
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
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
              onChange={handlePartidosJugadosChange}
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
              onChange={handleGolesChange}
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
              onChange={handleAsistenciasChange}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Añadir
            </button>
          </div>
        </form>

        <div className="relative rounded-md container mx-auto px-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs dark:border-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3">
                  Partidos Jugados
                </th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3">
                  Goles
                </th>
                <th scope="col" className="hidden lg:table-cell px-6 py-3">
                  Asistencias
                </th>
                <th scope="col" className="px-6 py-3">
                  Promedio Goles
                </th>
                <th scope="col" className="px-6 py-3">
                  Promedio Asistencias
                </th>
                <th scope="col" className="px-6 py-3">
                  Contribución
                </th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {player.nombre}
                  </td>
                  <td className="hidden lg:table-cell px-6 py-4">
                    {player.partidosJugados}
                  </td>
                  <td className="hidden lg:table-cell px-6 py-4">{player.goles}</td>
                  <td className="hidden lg:table-cell px-6 py-4">
                    {player.asistencias}
                  </td>
                  <td className="px-6 py-4">
                    {player.promedioGoles.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    {player.promedioAsistencias.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 font-bold">
                    {player.contribucionDirecta.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
