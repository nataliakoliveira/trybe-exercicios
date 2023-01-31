USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solutions';
Select 1,2,3;
SELECT 10 + 15 AS 'Soma dos números 10 e 15';
SELECT (2 * 34) + 202;
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' from Projects;
SELECT Name from Scientists
ORDER BY Name ASC;
SELECT Name from Projects
ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído ') from Projects;
SELECT Name, Hours from Projects
ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists;