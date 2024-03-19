import { useEffect, useState } from "react";

const Weather = () => {
  const [temperature, setTemperature] = useState(String);
  const [humidity, setHumidity] = useState(String);
  const [windSpeed, setWindSpeed] = useState(String);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=11.267&lon=-73.3&appid=9f906571d424b92a3bd87a5215ad48a1",
          { method: "GET" }
        );
        const data = await response.json();

        const temperatureKelvin = data.main.temp;
        const temperature = (temperatureKelvin - 273.15).toString();
        setTemperature(temperature);

        const humidity = data.main.humidity;
        setHumidity(humidity);

        const windSpeed = data.wind.speed;
        setWindSpeed(windSpeed);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTemperature();
  }, []);

  return (
    <>
      <h1>Weather</h1>
      {temperature && <h3>Temperatura: {temperature}°C</h3>}
      {humidity && <h3>Humedad: {humidity}%</h3>}
      {windSpeed && <h3>Viento: {windSpeed}Km/h</h3>}
    </>
  );
};

export default Weather;
