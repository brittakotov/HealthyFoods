CREATE TABLE IF NOT EXISTS ingredients(
  id BIGSERIAL NOT NULL,
  ingredients_id INT,
  name VARCHAR(100),
  costvalue INT,
  costunit VARCHAR(200),
  image VARCHAR(200),
  aisle VARCHAR(100),
  PRIMARY KEY(id)
);

