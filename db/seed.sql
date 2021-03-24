--  create table statements
CREATE TABLE users (
 user_id SERIAL PRIMARY KEY,
 email VARCHAR(45)  NOT NULL,
 username VARCHAR(25) NOT NULL,
 password VARCHAR(500) NOT NULL
);
--master table for pulling whatever is needed for display
--named 'foods' so that it can operate with CRUD code
CREATE TABLE foods (
    meal_id SERIAL PRIMARY KEY,
    date DATE,
    title VARCHAR (50)
    mealtime VARCHAR (25),
    allergens VARCHAR(25),
    rating INT
    user_id INT REFERENCES users (user_id)
    
);










-- CREATE TABLE mealtype (
--     mealtype_id SERIAL PRIMARY KEY,
--     mealtype_name VARCHAR(25)
    
-- );
-- INSERT INTO mealtype (mealtype_name)
-- VALUES ('Breakfast'), ('Lunch'), ('Dinner'),('Snack');
-- -- second breakfast

-- CREATE TABLE allergentype (
--     allergen_id SERIAL PRIMARY KEY,
--     allergen_name VARCHAR(50)
--     );

--     INSERT INTO allergentype(allergen_name)
--     VALUES ('Wheat'), ('Fish'), ('Milk'), ('Eggs'), ('Peanuts'), ('Soybeans'), ('Tree Nuts'), ('Crustacean/Shellfish');

       

-- CREATE TABLE ratingtype (
--     rating_id SERIAL PRIMARY KEY,
--     rating_int INT

-- );
-- INSERT INTO ratingtype (rating_int)
-- VALUES (1), (2), (3), (4), (5), (6), (7), (8), (9), (10);





    