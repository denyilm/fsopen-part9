import express from 'express'
import { calculateBmi } from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  try {
    if (!isNaN(Number(_req.query.height)) && !isNaN(Number(_req.query.weight))) {
        const height:number = Number(_req.query.height)
        const weight:number = Number(_req.query.weight)
        res.json({
            height,
            weight,
            bmi: calculateBmi(height,weight)
        });
        } else {
        res.status(500).json({ error: 'Malformatted parameters'});
    }
  } catch (error) {
    res.status(500).json({ error: 'Malformatted parameters'});
  }
  
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});