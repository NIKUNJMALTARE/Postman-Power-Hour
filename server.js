const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/location', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.use('/locations', locationRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
