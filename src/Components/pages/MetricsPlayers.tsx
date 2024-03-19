import { useState } from "react";
import { formatDate } from "../../utils/dateUtils";
import Form from "../organisms/Form";
import TableContent from "../organisms/TableContent";
import Weather from "../atoms/Weather";
import Time from "../atoms/Time";
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
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (newPlayer: Player) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <>
      <div className="container mx-auto text-blue-950 dark:text-blue-100">
        <h1 className="text-6xl font-black text-center py-2">Metrics</h1>
        <Weather />
        <Time />
        <h2 className="text-3xl font-black text-center py-2">
          Fecha:{formattedDate}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-10">
          <div className="col-span-4 ">
            <Form />
          </div>
          <div className="col-span-6 bg-red-400 overflow-x-auto h-fit">
            <TableContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsPlayers;
