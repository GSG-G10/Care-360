BEGIN;
DROP TABLE IF EXISTS users,doctors,appointments CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL,
    password TEXT NOT NULL,
    userID INTEGER NOT NULL,
);
CREATE TABLE doctors(
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL,
    password TEXT NOT NULL,
    consultant INTEGER NOT NULL,
    specialty VARCHAR NOT NULL,
    center_name VARCHAR (200) NOT NULL,
    phone_number INTEGER NOT NULL,
    education JSON NOT NULL,
    experience JSON NOT NULL,
    treatments JSON NOT NULL,
    clinic_location VARCHAR (200) NOT NULL,
);
CREATE TABLE appointments(
    id SERIAL PRIMARY KEY,
   date date NOT NULL,
   time time NOT NULL ,
   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   doctor_id INTEGER REFERENCES doctors(id) ON DELETE CASCADE,
);

COMMIT;