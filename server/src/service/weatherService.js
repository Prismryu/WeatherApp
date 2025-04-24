import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

const apiKey = process.env.OPENWEATHER_API_KEY;

class WeatherService {
  async getCoordinates(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.length) throw new Error('City not found');
    const { lat, lon } = data[0];
    return { lat, lon };
  }

  async getForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const res = await fetch(url);
    return await res.json();
  }

  async getWeatherByCity(city) {
    const coords = await this.getCoordinates(city);
    const forecast = await this.getForecast(coords.lat, coords.lon);
    return forecast;
  }
}

export default new WeatherService();