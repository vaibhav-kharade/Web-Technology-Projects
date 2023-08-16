const cityInput = document.getElementById("city-input");
const getWeatherButton = document.getElementById("get-weather-button");
const weatherInfo = document.getElementById("weather-info");

const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

getWeatherButton.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) return;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === "404") {
      weatherInfo.textContent = "City not found";
    } else {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.textContent = `Temperature: ${temperature}°C, Description: ${description}`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}