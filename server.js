'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');


// bring in Mongoose
const mongoose = require('mongoose');
const Book = require('./models/book');

const app = express();

//middleware
app.use(cors());

//define port and listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// Connect mongoose to mongodb and bring into server
mongoose.connect(process.env.DB_URL);

// *** purely for troubleshooting 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function(){
  console.log('Mongoose Connected')
})

app.get('/', (req, res) => {
  res.status(200).send('Welcome :) ')
})

app.get('/test', (req, res) => {
  res.send('test request received')
})

// End point to get from DB
app.get('/books', async (req, res, next) => {
  try {
    let allBooks = await Book.find({Book});

    res.status(200).send(allBooks)
  } catch (error) {
    next(error)
  }
})



//Catchalls should always be the last
app.get('*', (req, res) => {
  res.status(404).send('404: Uh oh! The page you are looking for does not exist');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500: Something broke!');
  next(err);
});
