select products.img
from products
join cart
on products.id = cart.product_id
where order_id = $1;
