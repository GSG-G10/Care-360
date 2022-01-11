const connection = require('../../connection');
const hashPassword = require('../../../utils/hashPassword');

const addSpecialist = async ({
  name,
  email,
  password,
  specialty,
  center_name,
  clinic_location,
  phone_number,
  education,
  experience,
  treatments,
  image,
}) => {
  const hashedPassword = await hashPassword(password);
  const { command } = await connection.query(
    `
      INSERT INTO doctors
      (name,email,password,specialty,center_name,clinic_location,
        phone_number,education, experience, treatments, image)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) 
      RETURNING id, name;`,
    [
      name,
      email,
      hashedPassword,
      specialty,
      center_name,
      clinic_location,
      phone_number,
      education,
      experience,
      treatments,
      image,
    ],
  );
  return command;
};

module.exports = addSpecialist;
