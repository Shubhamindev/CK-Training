CREATE TABLE IF NOT EXISTS department(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS employee(
id INT PRIMARY KEY AUTO_INCREMENT,
employee_id INT UNIQUE,
name VARCHAR(100) NOT NULL,
age INT NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
)

INSERT INTO department (id, name) VALUES
(1, 'DevOps'),
(2, 'Full Stack'),
(3, 'Data Engineering'),
(4, 'Sales');

INSERT INTO employee (id, employee_id, name, age, department_id) VALUES
(1, 1001, 'John Doe', 21, 1),
(2, 1002, 'Jane Smith', 35, 1),
(3, 1003, 'Richard Roe', 19, 2),
(4, 1004, 'Mary Major', 51, NULL),
(5, 1005, 'Jack Green', 43, 3);

SELECT * FROM department d;
SELECT * FROM employee e ;

SELECT name
FROM department;

SELECT e.employee_id, e.name 
FROM employee e
INNER JOIN department d ON e.department_id = d.id
WHERE d.name = 'DevOps';

SELECT DISTINCT name FROM department;



SELECT employee_id, name 
FROM employee 
WHERE name LIKE 'J%';

SELECT employee_id, name, age
FROM employee
ORDER BY age DESC
LIMIT 1 OFFSET 1;

SELECT employee_id, name 
FROM employee
ORDER BY name DESC;

SELECT e.employee_id, e.name , d.name
FROM employee e
INNER JOIN department d ON e.department_id = d.id

SELECT d.name AS department_name, COUNT(e.id) AS employee_count
FROM department d
JOIN employee e ON d.id = e.department_id
GROUP BY d.name
ORDER BY employee_count DESC
LIMIT 1;

SELECT e.employee_id, e.name, d.name 
FROM employee e
INNER JOIN department d ON e.department_id = d.id
WHERE d.name IN ('DevOps', 'Data Engineering');

SELECT d.name , COUNT(e.id)
FROM department d
JOIN employee e ON d.id = e.department_id
GROUP BY d.name
HAVING COUNT(e.id) > 1;

SELECT e.employee_id, e.name AS employee_name, d.name AS department_name
FROM employee e
LEFT JOIN department d ON e.department_id = d.id
UNION
SELECT e.employee_id, e.name AS employee_name, d.name AS department_name
FROM employee e
RIGHT JOIN department d ON e.department_id = d.id;

DELETE FROM department 
WHERE id NOT IN (
    SELECT DISTINCT department_id FROM employee WHERE department_id IS NOT NULL
);










