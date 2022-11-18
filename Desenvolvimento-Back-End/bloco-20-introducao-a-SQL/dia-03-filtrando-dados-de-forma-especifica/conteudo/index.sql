--- WHERE

-- 1
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org'
-- 2
SELECT * FROM sakila.customer WHERE store_id = '2' AND active IS FALSE AND first_name <> 'KENNETH'
-- 3
SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating = 'G' OR rating = 'PG-13' OR rating = 'PG' AND replacement_cost >= '18'
ORDER BY replacement_cost DESC, title 
LIMIT 100;
-- 4
SELECT COUNT(*) FROM sakila.customer
WHERE store_id <> '2'
-- 5
SELECT * FROM sakila.customer
WHERE store_id <> '2' AND active <> '1'
-- 6
SELECT * FROM sakila.film
WHERE rating  = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

---- LIKE

-- 1
USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';
-- 2
USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';
-- 3
USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
-- 4
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';
-- 5
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- 6
USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
-- 7
USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

---- IN & BETWEEN

-- 1
USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
-- 2
USE sakila;
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
-- 3
USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';
-- 4
USE sakila;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
-- 5
USE sakila;
SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
