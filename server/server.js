const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose");
const port = 5000;

// set up mongoose

mongoose.connect(
  'xxx',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes 
app.use('/users/', require('./routes/user'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})