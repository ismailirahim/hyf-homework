-- Find out how many tasks are in the task table
SELECT COUNT(*) 
FROM task;

-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) FROM task 
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done
SELECT task.title, status.name AS status FROM task, status 
WHERE task.status_id = status.id and status.name = 'done'; 

-- Find all the tasks that are not marked as done
SELECT task.title, status.name AS status FROM task, status 
WHERE task.status_id = status.id and status.name != 'done'; 

-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created desc;

-- Get the single most recently created task
 SELECT * FROM task
ORDER BY created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%'  OR description LIKE '%database%´'  ;


-- Get the title and status (as text) of all tasks
SELECT title, status.name FROM task
INNER JOIN status ON status.id = status_id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(task.title), status.name from task
INNER JOIN status ON status.id = status_id
GROUP BY name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT name, COUNT(*) AS task FROM task
INNER JOIN status ON status.id = status_id
GROUP BY name
ORDER BY task DESC;






