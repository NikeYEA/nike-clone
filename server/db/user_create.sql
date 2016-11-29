INSERT INTO users (first_name, last_name)
VALUES ($1, $2)
RETURNING *;
