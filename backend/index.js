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

    res.json(await response.json());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
