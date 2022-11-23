-- manipular string
SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google')
SELECT LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11)
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- IF e CASE
SELECT IF(title ='ACE GOLDFINGER', 'conheço o filme', 'não conheço o filme')
AS 'conheço o filme?'
FROM sakila.film ;
SELECT 
	title,
    rating, 
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'publico-alvo'
FROM sakila.film;
-- DIV e MOD
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
SELECT 220 DIV 12;
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));
-- FUNCOES MATEMATICAS
SELECT FLOOR(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
-- DATAS
SELECT DATEDIFF('2030-01-20', NOW());
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');
-- FUNCOES DE AGREAGACAO
SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
-- GROUP BY e com HAVING
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
SELECT rating, SUM(replacement_cost) as custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;