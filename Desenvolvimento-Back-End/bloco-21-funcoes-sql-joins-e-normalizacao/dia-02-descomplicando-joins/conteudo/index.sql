-- INNER JOIN
SELECT a.actor_id, a.first_name, b.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS b
ON a.actor_id = b.actor_id

SELECT a.first_name, a.last_name, b.address
FROM sakila.staff AS a
INNER JOIN sakila.address AS b
ON a.address_id = b.address_id

SELECT a.customer_id, a.first_name, a.email, b.address_id, b.address
FROM sakila.customer AS a
INNER JOIN sakila.address AS b
ON a.address_id = b.address_id
ORDER BY a.first_name DESC
LIMIT 100;

SELECT a.first_name, a.email, b.address_id, b.address, b.district
FROM sakila.customer AS a
INNER JOIN sakila.address AS b
ON a.address_id = b.address_id
WHERE b.district = 'California' AND a.first_name LIKE '%rene%';

SELECT
    c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS `quantidade de filmes alugados`
FROM
    sakila.customer AS c
INNER JOIN
    sakila.rental AS r 
ON 
    r.customer_id = c.customer_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    c.first_name DESC,
    c.last_name DESC;

SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- LEFT JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGTH JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- SELF JOIN

SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id;

SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
    hr.employees AS manager
INNER JOIN
    hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
    manager.employee_id;

