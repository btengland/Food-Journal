
module.exports = {
  getFoods: (req, res) => {
      const db = req.app.get('db')
      console.log(req.session.user)
      const {userId} = req.session.user
      db.get_foods([userId]).then((foods) => {
          res.status(200).send(foods)
      })
      
  },
  getFood: (req, res) => {
      const db = req.app.get('db')
      const {meal_id} = req.params
      db.get_food([meal_id]).then(foods => {
          res.status(200).send(foods[0])
      })
  },
  addFood: (req, res) => {
      const db = req.app.get('db')
      const {userId} = req.session.user
      const {mealType, date, foodItems, mood} = req.body
      db.add_food([mealType, date, foodItems, mood, userId])
      .then((foods) => {
          res.status(200).send(foods)
      })
      .catch(err => console.log(err))
  },
  editFoods: (req, res) => {
      const db = req.app.get('db')
      const {mealType, date, allergens, rating} = req.body
      const {meal_id} = req.params
      db.foods.edit_food([meal_id, mealType, date, allergens, rating])
      .then((foods) => {
          res.status(200).send(foods)
      })
  },
  deleteFood: (req, res) => {
      const db = req.app.get('db')
      const {meal_id} = req.params
      db.foods.delete_food(meal_id)
      .then((foods) => {
          res.status(200).send(foods)
      })
  }
}