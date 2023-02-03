var APIKey = "e2155e349b6d5e6dd0461111d10358aa";

var city = prompt("Enter city name:");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

fetch(queryURL);
