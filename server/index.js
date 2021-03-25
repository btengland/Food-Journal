require('dotenv').config();



const express = require('express');
const massive = require('massive');
const session = require('express-session');

const app = express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const auth = require('./controllers/authController');
const foods = require('./controllers/foodsController')



app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
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


app.post(`/auth/register`, auth.emailMiddleware, auth.register);
app.post(`/auth/login`, auth.login);
app.delete(`/auth/logout`, auth.logout);
app.get(`/auth/user`, auth.getUserSession);


// Food Endpoints
app.get(`/api/foods`, foods.getFoods);
app.get(`/api/foods/:meal_id`, foods.getFood);
app.delete(`/api/foods/:meal_id`, foods.deleteFood);
app.post(`/api/foods`, foods.addFood);
app.put(`/api/foods/:meal_id`, foods.editFoods);




app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))



