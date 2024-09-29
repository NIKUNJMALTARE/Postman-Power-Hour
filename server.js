const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

mongoose.connect('mongodb+srv://nikunj:1234@cluster0.djsjf.mongodb.net/?retryWrites=true&w=majority&appName=cluster0', {
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
