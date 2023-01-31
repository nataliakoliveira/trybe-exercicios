-- Exclua do banco de dados o ator com o nome de “KARL”.
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de “MATTHEW”.
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Exclua da tabela film_text todos os registros que possuem a palavra “saga” em suas descrições.
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
