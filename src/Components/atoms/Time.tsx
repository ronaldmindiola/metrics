import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const horas = currentDate.getHours();
      const minutos = currentDate.getMinutes();
      const segundos = currentDate.getSeconds();
      setTime(`${horas}:${minutos}:${segundos}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // El efecto se ejecutará solo una vez al montar el componente

  return (
    <>
      <h1>{time}</h1>
    </>
  );
};

export default Time;
