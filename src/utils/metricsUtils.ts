export const calcData = (players: any[]) => {
  let totalGoles = 0;
  let totalAsistencias = 0;
  let totalPartidosJugados = 0;
  let totalContribucionDirecta = 0;

  players.forEach((player) => {
    totalGoles += player.goles;
    totalAsistencias += player.asistencias;
    totalPartidosJugados += player.partidosJugados;
    totalContribucionDirecta += player.contribucionDirecta;
  });
  return {
    totalGoles,
    totalAsistencias,
    totalPartidosJugados,
    totalContribucionDirecta,
  };
};
