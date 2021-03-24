
module.exports = {
  getFoods: (req, res) => {
      const db = req.app.get('db')
      db.foods.get_foods().then((foods) => {
          res.status(200).send(foods)
      })
      
  },
  getFood: (req, res) => {
      const db = req.app.get('db')
      const {meal_id} = req.params
      db.foods.get_food(meal_id).then(foods => {
          res.status(200).send(foods[0])
      })
  },
  addFood: (req, res) => {
      const db = req.app.get('db')
      const {mealType, _date, allergens, rating} = req.body
      db.foods.add_food(mealType, _date, allergens, rating)
      .then((foods) => {
          res.status(200).send(foods)
      })
  },
  editFoods: (req, res) => {
      const db = req.app.get('db')
      const {mealType, _date, allergens, rating} = req.body
      const {meal_id} = req.params
      db.foods.edit_food(meal_id, mealType, _date, allergens, rating)
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