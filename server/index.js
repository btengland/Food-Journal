require('dotenv').config();



const express = require('express');
const massive = require('massive');
const session = require('express-session');
// const path = require('path')
//  The code above ^^^ is for deploying ibwell to Digital Ocean also see app.get* below

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

// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'))
// })
// The above code catch all to serve routes to send back index.html form build...This is for the Digital Ocean ibwell 

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))



