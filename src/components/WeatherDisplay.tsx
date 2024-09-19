
const WeatherDisplay = ({ weather }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys.country}</h2>
      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-xl">Temperature</h3>
          <p className="text-3xl">{weather.main.temp}°C</p>
        </div>
        <div>
          <h3 className="text-xl">Weather</h3>
          <p className="text-3xl">{weather.weather[0].description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-xl">Humidity</h3>
          <p className="text-2xl">{weather.main.humidity}%</p>
        </div>
        <div>
          <h3 className="text-xl">Wind Speed</h3>
          <p className="text-2xl">{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
