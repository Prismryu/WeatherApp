import { readFileSync, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../../db/db.json');

class City {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
}

class HistoryService {
  readHistory() {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  saveHistory(history) {
    writeFileSync(filePath, JSON.stringify(history, null, 2));
  }

  addCity(name) {
    const history = this.readHistory();
    const existing = history.find((c) => c.name.toLowerCase() === name.toLowerCase());
    if (!existing) {
      const city = new City(name);
      history.push(city);
      this.saveHistory(history);
    }
  }

  getHistory() {
    return this.readHistory();
  }

  deleteCity(id) {
    const history = this.readHistory();
    const filtered = history.filter((c) => c.id !== id);
    this.saveHistory(filtered);
  }
}

export default new HistoryService();