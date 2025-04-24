import { Router } from 'express';
import WeatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js';

const router = Router();

// POST city to get weather
router.post('/', async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const weather = await WeatherService.getWeatherByCity(city);
    HistoryService.addCity(city);
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET search history
router.get('/history', (req, res) => {
  const history = HistoryService.getHistory();
  res.json(history);
});

// DELETE city from history
router.delete('/history/:id', (req, res) => {
  const { id } = req.params;
  try {
    HistoryService.deleteCity(id);
    res.status(200).json({ message: 'City deleted' });
  } catch {
    res.status(500).json({ error: 'Error deleting city' });
  }
});

export default router;