SELECT users.*, orders.id AS order_id
FROM users
JOIN orders
ON orders.user_id = users.id
WHERE users.id = $1 AND complete = false;
