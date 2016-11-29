INSERT INTO users (first_name, email)
VALUES ($1, $2)
RETURNING *;
