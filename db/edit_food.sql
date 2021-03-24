UPDATE foods
SET (title) = ($2)
WHERE meal_id = $1;
SELECT * FROM foods;