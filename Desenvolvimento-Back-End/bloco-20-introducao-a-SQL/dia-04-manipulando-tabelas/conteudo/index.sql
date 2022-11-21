-- 1
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Luis', 'Serra', 2, 'luizin@sakilastaff.com', 2, 1, 'Luis', 'eisso');
-- 2
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
('Luis', 'Serra', 2, 'luizin@sakilastaff.com', 2, 1, 'Luis', 'eisso'),
('Leon', 'S.Kennedy', 1, 'leon@sakilastaff.com', 1, 1, 'Leon', 'FollowMe');
-- 3
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer ORDER BY sakila.customer.customer_id LIMIT 5;
-- 4
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');
-- 5
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

-- UPDATE
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.staff SET sakila.staff.first_name = (
CASE staff_id 
WHEN 3 THEN 'Renato'
WHEN 4 THEN 'Rogerio'
ELSE sakila.staff.first_name
END);

-- DELETE

-- Primeiro descubra os ID
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item
DELETE FROM sakila.actor
WHERE first_name = 'KARL';