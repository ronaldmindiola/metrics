const options = {method: 'GET'};

fetch('https://api.openweathermap.org/data/2.5/weather?lat=11.267&lon=-73.3&appid=9f906571d424b92a3bd87a5215ad48a1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));