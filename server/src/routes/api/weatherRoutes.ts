import { Router, type Request, type Response } from 'express';
import WeatherService from '../../service/weatherService.js';
import HistoryService from '../../service/historyService.js';

const router = Router();

// POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  const { city } = req.body;

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ error: 'City name is required and must be a string.' });
  }

  try {
    const weather = await WeatherService.getWeatherByCity(city);
    HistoryService.addCity(city);
    res.status(200).json(weather);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch weather data.' });
  }
});

// GET search history
router.get('/history', (req: Request, res: Response) => {
  try {
    const history = HistoryService.getHistory();
    res.status(200).json(history);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to load history.' });
  }
});

// BONUS: DELETE city from search history
router.delete('/history/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    HistoryService.deleteCity(id);
    res.status(200).json({ message: 'City deleted successfully.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to delete city.' });
  }
});

export default router;