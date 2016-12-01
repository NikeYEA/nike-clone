SELECT users.*, ord.id AS order_id
FROM users
JOIN orders ord
ON ord.user_id = users.id
WHERE ord.complete = false;
