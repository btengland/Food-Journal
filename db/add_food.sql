INSERT INTO foods (mealtype, _date, allergens, rating, user_id)
VALUES ($1, $2, $3, $4, $5);
SELECT * FROM foods
WHERE user_id = $5;

-- INSERT INTO foods ()
-- VALUES ();
