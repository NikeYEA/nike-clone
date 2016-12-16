INSERT INTO Users (first_name, email, password, admin, mobile_phone)
VALUES ($1, $2, $3, false, $4)
RETURNING *
