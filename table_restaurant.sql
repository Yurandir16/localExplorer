CREATE TABLE restaurant {
    id SERIAL PRIMARY KEY,
    name_local VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    gender VARCHAR(255)NOT NULL,
    image VARCHAR(255)NOT NULL,
    address VARCHAR(255)NOT NULL,
    status boolean NOT NULL,
    user_id INTEGER NOT NULL
}