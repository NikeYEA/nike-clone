SELECT * prod.*, pic.*
FROM cart pic
JOIN products prod
ON prodid = pic.product_id
WHERE pic.order_id = $1;
