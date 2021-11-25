BEGIN;

DROP TABLE IF EXISTS users,doctors,appointments CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL, 
    password TEXT NOT NULL,
    identity_number INTEGER NOT NULL
); 

CREATE TABLE doctors(
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    email VARCHAR (150) NOT NULL,
    password TEXT NOT NULL,
    specialty VARCHAR (250) NOT NULL,
    center_name VARCHAR (200) NOT NULL,
    clinic_location VARCHAR (200) NOT NULL,
    phone_number VARCHAR (20) NOT NULL,
    education TEXT NOT NULL,
    experience TEXT NOT NULL,
    treatments TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE appointments(
    id SERIAL PRIMARY KEY,
   date TEXT NOT NULL,
   time TEXT NOT NULL ,
   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
   doctor_id INTEGER REFERENCES doctors(id) ON DELETE CASCADE
);

COMMIT;
