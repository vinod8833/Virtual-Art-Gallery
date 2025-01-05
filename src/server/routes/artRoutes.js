const express = require('express');
const axios = require('axios');
const router = express.Router();

const openaiApiKey = '';

router.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: 'image-alpha-001',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );
    res.json({ imageUrl: response.data.data[0].url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate art' });
  }
});

module.exports = router;
