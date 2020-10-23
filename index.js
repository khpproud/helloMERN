require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
