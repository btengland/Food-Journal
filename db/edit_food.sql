UPDATE foods
SET (title) = ($2)
WHERE food_id = $1;
SELECT * FROM foods;