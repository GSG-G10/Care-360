const connection = require('../connection');

const getAppointments = (id) => connection.query('SELECT * FROM appointments WHERE doctor_id = $1', [id]);

const getDoctorBooks = async (id) => {
  const apoint = await getAppointments(id);
  const datesActive = [];
  for (let i = 0; i < apoint.rows.length; i += 1) {
    const dates = new Date();
    const x1 = new Date(`${dates.getFullYear()}-${Number(dates.getMonth()) + 1}-${dates.getDate()}`).getTime();
    const { date, time } = apoint.rows[i];
    const x2 = new Date(date).getTime();
    if (x2 >= x1) {
      datesActive.push({ date, time });
    }
  }
  return datesActive;
};

module.exports = getDoctorBooks;
