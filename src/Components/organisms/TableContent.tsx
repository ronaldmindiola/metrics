const TableContent = () => {
  const players = [
    {
      nombre: "Lionel Messi",
      partidosJugados: 39,
      goles: 11,
      asistencias: 6,
      promedioGoles: 10,
      promedioAsistencias: 10,
      contribucionDirecta: 10,
    },
  ];
  const handlePlayerDelete = (index: number) => {
    players.splice(index, 1);
    console.log(players);
  };

  return (
    <>
      <section className="container mx-auto p-0">
        <table className="m-0">
          <thead>
            <tr>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-4 text-center"
              >
                #
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Nombre
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell whitespace-nowrap px-6 py-4 text-center"
              >
                Partidos Jugados
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-4 text-center"
              >
                Goles
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell px-6 py-4 text-center"
              >
                ASistencias
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Contribución
              </th>
            </tr>
          </thead>
          <tbody className="p-0">
            {players.map((player, index) => (
              <tr key={index} className="border-b dark:border-neutral-500 ">
                <td className="hidden lg:table-cell lg:whitespace-nowrap px-6 py-4 font-medium text-center">
                  {index}
                </td>
                <td className="whitespace-nowrap py-4 px-6 font-black capitalize">
                  {player.nombre}
                </td>
                <td className="hidden lg:table-cell whitespace-nowrap px-6 py-4 text-center">
                  {player.partidosJugados}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  {player.goles}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
                  {player.asistencias}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-black text-center">
                  {player.contribucionDirecta.toFixed(1)}%
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center">
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
      </section>
    </>
  );
};

export default TableContent;
