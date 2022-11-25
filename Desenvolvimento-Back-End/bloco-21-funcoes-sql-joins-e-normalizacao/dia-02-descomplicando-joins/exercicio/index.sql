-- 1
SELECT a.id, a.title, b.domestic_sales, b.international_sales
FROM pixar.movies as a
INNER JOIN pixar.box_office as b
ON a.id = b.movie_id
-- 2
SELECT a.id, a.title, (b.domestic_sales + b.international_sales) as 'vendas'
FROM pixar.movies as a
INNER JOIN pixar.box_office as b
ON a.id = b.movie_id
WHERE b.international_sales > b.domestic_sales
-- 3
SELECT m.title, b.rating
FROM pixar.movies as m
INNER JOIN pixar.box_office as b
ON m.id = b.movie_id
ORDER BY m.title DESC;
-- 4
SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
LEFT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;
-- 5
SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
RIGHT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;