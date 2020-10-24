require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require('./models/User')

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose
  .connect(config.MONGGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err))

app.get('/', (req, res) => res.send('Hello World! HaHaHa'))

app.post('/register', (req, res) => {
  // 회원 가입에 필요한 정보를 가져와서 데이터베이스에 저장
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
