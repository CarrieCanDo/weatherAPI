// Function to fetch weather data
function getWeather() {
    const zipCode = document.getElementById('zip-code').value;
    const apiKey = '5a22a37fa96ee1da75e1943931d96480';
    const countryCode = 'US';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}&units=imperial`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

//Function to update the DOM
function updateWeather(data) {
    const currentDate = new Date().toLocaleDateString();
    const city = data.name;
    const temp = `High: ${data.main.temp_max}°F / Low: ${data.main.temp_min}°F`;
    const conditions = data.weather[0].main;
    

    document.getElementById('location').textContent = `${city} (${currentDate})`;
    document.getElementById('temperature').textContent = `Temperature: ${temp}°F`;
    document.getElementById('description').textContent = conditions;
    document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
}




  

