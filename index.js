const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
require('dotenv').config();

const rapperRoute = require('./routes/rapper.route');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to DB")
});
app.use(bodyParser.json());
app.use(cors())
app.get('/', (req, res) => {
    res.send('This is the home page');
  });

app.use('/rappers', rapperRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})