const express = require('express');
const axios = require('axios').create();
const app = express();
const PORT = 8000;
const TIME_INTERVAL = 700000;
const TIC_TAC_TOE_URL = 'https://tic-tac-toe-c5q2.onrender.com/health';
const SECOND_SERVICE = '';

app.listen(PORT, () => {
  console.log(`App is running on Port: ${PORT}`);
  setInterval(async () => {
    const response = await axios.get(TIC_TAC_TOE_URL);
    console.log('Response : ', response.data);
  }, TIME_INTERVAL);
});

app.get('/health', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'First Service working smoothly' });
});
