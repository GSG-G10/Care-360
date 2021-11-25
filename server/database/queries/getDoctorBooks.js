const connection = require('../connection');

const getDoctorBooks = async (id) => {
  const apoint = await connection.query('SELECT * FROM appointments WHERE doctor_id = $1', [id]);
  const datesActive = [];
  for (let i = 0; i < apoint.rows.length; i += 1) {
    const dates = new Date();
    const x1 = new Date(`${dates.getFullYear()}-${Number(dates.getMonth()) + 1}-${dates.getDate()}`).getTime();
    const { date, time } = apoint.rows[i];
    const x2 = new Date(date).getTime();
    if (x2 >= x1) {
      datesActive.push({ date: date.split('-')[2], time });
    }
  }
  return datesActive;
};

module.exports = getDoctorBooks;
