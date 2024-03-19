import { PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { BeakerIcon } from "@heroicons/react/24/solid";
const Table = ({ handleOpenDialog }: { handleOpenDialog: () => void }) => {
  return (
    <>
      <section className="p-2">
        <div className="relative overflow-x-clip">
          <table className="w-full text-sm text-left rtl:text-right">
            <caption className="p-5 text-lg font-black text-left rtl:text-right bg-stone-200 dark:bg-stone-900 rounded-t-lg">
              Listado de Jugadores
              <BeakerIcon className="h-6 w-6 text-blue-500" />
              <div className="flex justify-between">
                <div>
                  <p className="mt-1 text-sm font-normal">
                    A continuacion se muestran los jugadores.
                  </p>
                  <p className="mt-1 text-sm font-normal">
                    Cada jugador posee un promedio de goles y asistencias.
                  </p>
                </div>

                <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href="#"
                    title="Agregar nuevo jugador"
                    className="relative inline-flex items-center justify-center px-4 py-0 text-stone-800 transition-all duration-200 bg-stone-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                    onClick={handleOpenDialog}
                  >
                    Nuevo Jugador <PlusIcon className="h-6 w-6 text-gray-500" />
                  </a>
                </div>
              </div>
            </caption>
            <thead className="text-xs text-stone-700 bg-stone-300 dark:bg-stone-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th
                  scope="col"
                  className="hidden lg:table-cell px-2 py-3 text-center"
                >
                  N° Partidos
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell px-2 py-3 text-center"
                >
                  Goles
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell px-2 py-3 text-center "
                >
                  Asistencias
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Contribución
                </th>
                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr className=" dark:bg-stone-900 bg-stone-200">
                <th
                  scope="row"
                  className="px-6 py-4 whitespace-nowrap font-black"
                >
                  Ronald Araujo
                </th>
                <td className="hidden lg:table-cell px-6 py-4 text-center">
                  19 <span className="text-stone-500 text-xs">(127%)</span>
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-center">
                  1 <span className="text-stone-500 text-xs">(127%)</span>
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-center">
                  2 <span className="text-stone-500 text-xs">(127%)</span>
                </td>
                <td className="px-6 py-4 text-center text-2xl  font-black">
                  {" "}
                  182%
                </td>
                <td className="px-6 py-4 text-center text-2xl lg:text-4xl font-black">
                  <a href="#">
                    <i className="fas fa-edit"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-trash-alt"></i>
                    <TrashIcon className="h-6 w-6 text-gray-500" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Table;
