-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos ( department) são diferentes.
SELECT
	CONCAT(employee.first_name, " ", employee.last_name) AS "Nome pessoa colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome gerente"
FROM
	hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE
	employee.department_id <> manager.department_id;
    
-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT 
	CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS manager
INNER JOIN
	hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
	manager.employee_id;
