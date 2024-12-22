const apiKey = "556ab7ac921ede7a286000732b05bf38";
const city = "Sarajevo"; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


console.log("API URL: ", url);

fetch(url)
    .then(response => {
        if (!response.ok) {
            console.error("API request failed with status: ", response.status);
            throw new Error('API request failed');
        }
        return response.json();
    })
    .then(data => {
        console.log("API Response Data: ", data); 

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        console.log(`Temperature in ${city}: ${temperature}°C`);
        console.log(`Weather description: ${description}`);

        document.getElementById("weather-info").innerHTML = `
            <p>Temperature in ${city}: ${temperature}°C</p>
            <p>Weather: ${description}</p>
        `;
    })
    .catch(error => {
        console.error("Error fetching weather data: ", error);
        alert("There was an error fetching weather data.");
    });


