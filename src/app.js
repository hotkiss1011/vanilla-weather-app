function displayTemp(response) {
    console.log(response.data);
    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = Math.round(response.data.main.temp);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let key = "05992a658e151609dfa497fc6c2796f2";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${key}&units=imperial`;

  axios.get(apiUrl).then(displayTemp)