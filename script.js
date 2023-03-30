var APIKey = "e2155e349b6d5e6dd0461111d10358aa";
var city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

var searchButton = document.querySelector('.search-button');
var searchInput = document.querySelector('#search-input');
var historyList = document.querySelector('#history');
var todaySection = document.querySelector('#today');
var forecastSection = document.querySelector('#forecast');
