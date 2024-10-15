-- Dummy data for the menu
INSERT INTO menu (name, price, description)
VALUES ('Pizza', 499, 'Cheese pizza with extra toppings', 4.6, 'Pizza batter, mozarella cheese, capsicum, mushroom, onion', 'Main', 'Veg'),
       ('Burger', 199, 'Chicken burger with fries', 4.3, 'Burger Bun, Chicken patty, Cucumber, Tomatoes', 'Snacks', 'Non-Veg');

-- Dummy data for orders
INSERT INTO orders (customer_id, order_date, total_cost)
VALUES (1, NOW(), 499),
       (2, NOW(), 698);