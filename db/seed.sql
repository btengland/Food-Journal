--  create table statements
CREATE TABLE users(
 user_id SERIAL PRIMARY KEY,
 email VARCHAR(45)  NOT NULL,
 username VARCHAR(25) NOT NULL,
 password VARCHAR(500) NOT NULL
)
