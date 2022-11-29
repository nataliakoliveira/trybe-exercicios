-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. 
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

 -- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos.
SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS `quantidade de filmes alugados`
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r
ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
SELECT stf.first_name, stf.last_name, AVG(pay.amount) AS `Média de pagamento`
FROM sakila.staff AS stf
INNER JOIN sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film.
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;