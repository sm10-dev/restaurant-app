CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  description TEXT,
  ingedients TEXT NOT NULL,
  Rating INT,
  Category VARCHAR
);
