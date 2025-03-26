async function getWeather() {
    let cityName = document.getElementById("temp1").value;
    const apiKey = 'ad76ddd6ed0746f8821105759241711'; // Your Weather API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;

    try {
        // Fetch weather data
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Extract relevant data
        const { location, current } = data;
        const { name, region, country } = location;
        const { temp_c, condition, wind_kph, humidity, precip_mm } = current;

        // Display data in the DOM
        document.getElementById("pick").innerHTML = `
            <h2>Weather in ${name}, ${region}, ${country}</h2>
            <p><strong>Temperature:</strong> ${temp_c}°C</p>
            <p><strong>Condition:</strong> ${condition.text}</p>
            <p><strong>Wind Speed:</strong> ${wind_kph} kph</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Rain:</strong> ${precip_mm ? precip_mm + " mm" : "No rain"} </p> <!-- Add Rain Data -->
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("pick").innerHTML = `<p>Error fetching data. Please try again.</p>`;
    }
}
