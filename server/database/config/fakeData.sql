INSERT INTO users (name,email,password,identity_number)
VALUES (
    'Nadia',
    'Nadia@gmail.com',
    '',
    '411939494'
),
(
    'Mohammad',
    'Mohammad@gmail.com',
    '',
    '411939494'
),
(
    'Noor',
    'Noor@gmail.com',
    '',
    '411939494'
),
(
    'Elham',
    'Elham@gmail.com',
    '',
    '411939494'
),
(
    'Ibrahim',
    'Ibrahim@gmail.com',
    '',
    '411939494'
);

INSERT INTO doctors (name, email,password,specialty,center_name,clinic_location, phone_number, education , experience,treatments,image)
VALUES (
    'Dr. Kader Kaplan Mutluer',
    'Dr.Mutluer@gmail.com',
    '',
    'Family Medicine',
    'The International Medical Centre',
    'downton',
    '0598756049',
    '[education in Medical Science, VU University,Netherlands,Master in Medical Science, VU University, Netherlands]',
    '[experience in Medical Science, VU University,Netherlands,Master in Medical Science, VU University, Netherlands]',
    '[treatments in Medical Science, VU University,Netherlands,Master in Medical Science, VU University, Netherlands]',
    'https://www.currentschoolnews.com/wp-content/uploads/2020/06/doctor.jpg'
);


INSERT INTO appointments ( date,time,user_id,doctor_id)
VALUES (
    '25-08-2021',
    '22:33 pm',
    2,
    1
    );

select * from users;
select * from doctors;
select * from appointments;




