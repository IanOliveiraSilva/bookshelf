CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITHOUT TIME ZONE,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE user_profile (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(id),
    contadorreviews INTEGER,
    contadorlists INTEGER,
    birthday DATE,
    bio VARCHAR,
    socialmediax VARCHAR,
    socialmediatiktok VARCHAR,
    location VARCHAR,
    userprofile VARCHAR,
    socialmediainstagram VARCHAR,
    name VARCHAR,
    familyname VARCHAR,
    icon VARCHAR
);

CREATE TABLE user_books (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  book_id VARCHAR,
  read_status BOOLEAN,
  own_status BOOLEAN,
  favorite BOOLEAN,
  want_to_read BOOLEAN,
  rating FLOAT,
  review TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO user_books (user_id, book_id, read_status, own_status, favorite, want_to_read, rating, review, created_at, updated_at)
VALUES (1, 'kotPYEqx7kMC', false, false, true, false, NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM user_books WHERE user_id = 1 AND book_id = 'kotPYEqx7kMC'

SELECT user_id, id, book_id, created_at, updated_at, 
COUNT(*) AS favorite_books_count
FROM user_books
WHERE favorite = true AND user_id = 1
GROUP BY user_id, id, book_id, created_at, updated_at

SELECT COUNT(*) FROM user_books WHERE favorite = true AND user_id = 1


	
SELECT * 
FROM user_books
WHERE favorite = true AND user_id = 1

SELECT book_id FROM user_books WHERE favorite = true	
	
SELECT * FROM users
SELECT * FROM user_books 
SELECT * FROM user_profile

DROP TABLE users
DROP TABLE user_books
DROP TABLE user_profile

