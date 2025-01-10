import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/station', async (req, res) => {
  try {
    const response = await fetch('http://api.open-notify.org/iss-now.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();

    res.json({ ...json.iss_position });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
