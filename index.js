const express = require('express');
const axios = require('axios').create();
const app = express();
const PORT = 8000;
const TIME_INTERVAL = 300000;
const TIC_TAC_TOE_URL = process.env.TIC_TAC_TOE_URL;
const SECOND_SERVICE_URL = process.env.SERVICE_URL;

const connect = async (URL) => {
  try {
    await axios.get(URL);
    console.log(`positive response from: ${URL}`);
  } catch (err) {
    console.log(`negative response from: ${URL}`);
  }
};

app.listen(PORT, () => {
  console.log(`App is running on Port: ${PORT}`);
  setInterval(async () => {
    await connect(TIC_TAC_TOE_URL);
    await connect(SECOND_SERVICE_URL);
  }, TIME_INTERVAL);
});

app.get('/health', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'First Service working smoothly' });
});
