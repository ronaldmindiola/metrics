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
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [partidosJugados, setPartidosJugados] = useState("");
  const [goles, setGoles] = useState("");
  const [asistencias, setAsistencias] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  const nombreInputRef = useRef<HTMLInputElement>(null); // Referencia al campo de entrada de nombre

  const promedioGoles = parseInt(goles) / parseInt(partidosJugados);
  const promedioAsistencias = parseInt(asistencias) / parseInt(partidosJugados);
  const contribucionDirecta =
    ((parseInt(goles) + parseInt(asistencias)) / parseInt(partidosJugados)) *
    100;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //
    setPlayers([...players, newPlayer]);

    // Reiniciar los campos del formulario después de enviar
    reset();
  };

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

  return (
    <>
      <form
        action=""
        className="flex flex-col p-8 lg:p-4 m-0 lg:m-2 shadow-lg z-50 bg-slate-950 bg-opacity-20 md:flex-col border border-slate-500 border-opacity-20 rounded "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <div className="relative mb-5 group">
            <input
              ref={nombreInputRef}
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={nombre}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_name"
              className="absolute text-sm text-stone-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
            >
              Nombre:
            </label>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="relative mb-5 group">
            <input
              type="number"
              name="floating_npartidos"
              id="floating_npartidos"
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={partidosJugados}
              onChange={handleChange}
              required
              min={0}
            />
            <label
              htmlFor="floating_npartidos"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
            >
              N° Partidos
            </label>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="relative mb-5 group">
            <input
              type="number"
              name="floating_goles"
              id="floating_goles"
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={goles}
              onChange={handleChange}
              required
              min={0}
            />
            <label
              htmlFor="floating_goles"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
            >
              Goles
            </label>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="relative mb-5 group">
            <input
              type="number"
              name="floating_asistencias"
              id="floating_asistencias"
              className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={asistencias}
              onChange={handleChange}
              required
              min={0}
            />
            <label
              htmlFor="floating_asistencias"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
            >
              Asistencias
            </label>
          </div>
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
    </>
  );
};

export default Form;
