let is_loading = false;
let error_message = "";
let weather_data = null;

const output_weather = document.getElementById("weather-output");
const disc_weather = document.getElementById("Weather-disc");

function renderWeather() {
  if (is_loading) {
    output_weather.textContent = "Loading...";
    return;
  }
  if (error_message) {
    output_weather.textContent = "ERROR ";
    disc_weather.textContent = error_message;

    output_weather.classList.add("error");
    disc_weather.classList.add("error");
    return;
  }
  if (weather_data) {
    output_weather.innerHTML =
      weather_data.properties.periods[0].temperature + "&deg;F";
    disc_weather.textContent = weather_data.properties.periods[0].shortForecast;
    return;
  }
  // fallback if all else fails
  output_weather.textContent = "No data available.";
  disc_weather.textContent = "";
}

async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    // Ask for the data
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    weather_data = data;
    console.log(data);
  } catch (error) {
    error_message = error.message;
    console.error("Error:", error_message);
  } finally {
    is_loading = false;
    renderWeather();
  }
}

getWeatherData();
