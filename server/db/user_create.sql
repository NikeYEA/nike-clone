INSERT INTO users (first_name, email, mobile_phone)
VALUES ($1, $2)
RETURNING *;
