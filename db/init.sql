CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    name VARCHAR(100),
    loyalty_points INT DEFAULT 0
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    amount DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
