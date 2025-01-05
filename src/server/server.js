const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/api/generate-art', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    });

    const imageUrl = response.data.data[0].url;
    res.json({ image: imageUrl });
  } catch (error) {
    console.error('Error generating art:', error.message);
    res.status(500).json({ error: 'Failed to generate art' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
