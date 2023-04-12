const express = require('express');
const axios = require('axios').create();
const app = express();
const PORT = 8000;
const TIME_INTERVAL = 700000;
const TIC_TAC_TOE_URL = 'https://tic-tac-toe-c5q2.onrender.com/health';
const SECOND_SERVICE_URL = 'https://second-service-56j6.onrender.com/health';

app.listen(PORT, () => {
  console.log(`App is running on Port: ${PORT}`);
  setInterval(async () => {
    try {
      let response = await axios.get(TIC_TAC_TOE_URL);
      console.log('Response from TIC-TAC-TOE : ', response.data);
      response = await axios.get(SECOND_SERVICE_URL);
      console.log('Response from SECOND_SERVICE: ', response.data);
    } catch (err) {
      console.log('Error: ', err);
    }
  }, TIME_INTERVAL);
});

app.get('/health', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'First Service working smoothly' });
});
