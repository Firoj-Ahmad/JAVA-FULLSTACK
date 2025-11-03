document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const resultDiv = document.getElementById("WeatherResult");

  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }

  const apiKey = "b98879eab3b9c5ab82e91abb5408f4ca"; // 🔑 Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found!");
    const data = await res.json();

    resultDiv.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>🌤 Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    resultDiv.textContent = err.message;
  }
}