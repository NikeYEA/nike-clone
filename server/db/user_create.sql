INSERT INTO users (first_name, last_name, email, address, city, zip, country)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;
