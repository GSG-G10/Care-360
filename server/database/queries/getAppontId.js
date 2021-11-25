/* eslint-disable no-await-in-loop */
const connection = require('../connection');
const getDoctor = require('./getDoctor');

const getAppontId = async (id) => {
  const arr = [];
  const apoint = await connection.query('SELECT * FROM appointments WHERE user_id = $1', [id]);
  for (let i = 0; i < apoint.rows.length; i += 1) {
    const getDoc = await getDoctor(apoint.rows[i].doctor_id);
    const { center_name, clinic_location, name } = getDoc;
    const { date, time } = apoint.rows[i];
    arr.push({
      ...{ date, time },
      ...{ center_name, clinic_location, name },
    });
  }

  return arr;
};

module.exports = getAppontId;
