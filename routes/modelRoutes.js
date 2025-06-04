const express = require('express');
const router = express.Router();
const { predict } = require('../services/modelService');

router.post('/predict', async (req, res) => {
  try {
    const input = req.body.input; // pastikan ini array dengan panjang 80
    const result = await predict(input);
    res.json({ prediction: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
