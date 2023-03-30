var APIKey = "e2155e349b6d5e6dd0461111d10358aa";
var city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

var searchButton = document.querySelector('.search-button');
var searchInput = document.querySelector('#search-input');
var historyList = document.querySelector('#history');
var todaySection = document.querySelector('#today');
var forecastSection = document.querySelector('#forecast');

function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  
    fetch(queryURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
  
        displayWeather(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
    function displayWeather(data) {
        var todayHTML = `
          <div class="card mb-3">
            <div class="card-body">
              <h2 class="card-title">${data.name} (${moment().format('D/MMYYYY')})</h2>
              <p class="card-text">Temperature: ${data.main.temp} &deg;F</p>
              <p class="card-text">Humidity: ${data.main.humidity}%</p>
              <p class="card-text">Wind Speed: ${data.wind.speed} MPH</p>
            </div>
          </div>
        `;
        todaySection.innerHTML = todayHTML;
      

