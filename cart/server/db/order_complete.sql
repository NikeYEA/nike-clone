UPDATE orders
SET complete = true
WHERE id = $1;
