-- Create a table to store flight information
CREATE TABLE flights (
    flight_id VARCHAR PRIMARY KEY,
    status VARCHAR NOT NULL,
    gate VARCHAR
);

-- Insert some example flight data
INSERT INTO flights (flight_id, status, gate) VALUES
('AA123', 'On Time', 'A12'),
('BB456', 'Delayed', 'B5'),
('CC789', 'Cancelled', 'C8'),
('DD101', 'On Time', 'D2'),
('EE202', 'Delayed', 'E6');

-- Create a table to store user information (optional, if needed)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    phone_number VARCHAR,
    preferences JSONB
);

-- Create a table to store notifications (optional, if needed)
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    message TEXT,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR
);
