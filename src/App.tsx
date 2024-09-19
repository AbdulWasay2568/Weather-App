import { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'Enter your API_KEY';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Weather Checker</h1>
        
        <div className="flex flex-col sm:flex-row mb-4">
          <input
            type="text"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 sm:mr-2"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md"
          >
            Check Weather
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </div>
  );
}

export default App;
