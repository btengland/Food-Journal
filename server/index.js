require('dotenv').config();



const express = require('express');
const massive = require('massive');
const session = require('express-session')

const app = express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
// const auth = require('./controllers/authController');
// const day = require('./controllers/dayController');
// const week = require('./controllers/weekController');


app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db =>{
  app.set('db', db)
  console.log('db is working babeee!');
})





// Endpoints:
// register  `/auth/register`
// login  `/auth/login`
// logout`/auth/logout`
// getFoodPost  `/api/foods`
// deleteFoodPost  `/api/foods/:id`
// editFoodPost  `/api/foods/:id`
// addFood  `/api/foods`


// getDate `api/date/`
// editDate  `api/date/:id`


app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))