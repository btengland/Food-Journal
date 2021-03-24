UPDATE foods
SET (mealType, _date, allergens, rating) = ($2, $3, $4, $5)
WHERE meal_id = $1;
SELECT * FROM foods;

